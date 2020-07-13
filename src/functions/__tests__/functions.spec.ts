import { cacheValidatorFromTimeRange, toApiDateFrag, normalizeToBusinessDay } from '..'
import { TimeRangeKey, DATETIME_FORMAT } from '../../constants';
import moment from 'moment-business-days';
import { cachedSinceYesterdayClose, cachedSinceLast15Minutes, cachedSinceTodayClose } from '../utils';

const [fridayPrev, sunday] = ['2020-06-05 00:00', '2020-06-07 00:00',].map(dateString => moment(dateString, DATETIME_FORMAT, true))

const [monday, tuesday, wednesday] = [
  '2020-06-08 00:00',
  '2020-06-09 00:00',
  '2020-06-10 00:00'
].map(dateString => {
  const beforeOpen = moment(dateString, DATETIME_FORMAT, true);
  const tradingHours = beforeOpen.clone().add(12, 'hours');
  const afterClose = tradingHours.clone().add(7, 'hours')
  return {
    beforeOpen,
    tradingHours,
    afterClose
  }
})

test('normalizeToBusinessDay', () => {
  expect(normalizeToBusinessDay(sunday).date()).toBe(fridayPrev.date());
  expect(normalizeToBusinessDay(monday.beforeOpen).date()).toBe(fridayPrev.date());
  expect(normalizeToBusinessDay(monday.tradingHours).date()).toBe(monday.tradingHours.date());
  expect(normalizeToBusinessDay(tuesday.beforeOpen).date()).toBe(monday.tradingHours.date());
  expect(normalizeToBusinessDay(tuesday.afterClose).date()).toBe(tuesday.tradingHours.date());
})

test('toApiDateFrag', () => {
  expect(toApiDateFrag(TimeRangeKey.yesterday, sunday)).toBe('20200604');
  expect(toApiDateFrag(TimeRangeKey.today, sunday)).toBe('20200605')
  expect(toApiDateFrag(TimeRangeKey.yesterday, monday.beforeOpen)).toBe('20200604');
  expect(toApiDateFrag(TimeRangeKey.yesterday, monday.tradingHours)).toBe('20200605')
  expect(toApiDateFrag(TimeRangeKey.yesterday, monday.afterClose)).toBe('20200605')
  expect(toApiDateFrag(TimeRangeKey.today, monday.beforeOpen)).toBe('20200605');
  expect(toApiDateFrag(TimeRangeKey.today, monday.tradingHours)).toBe('20200608');
  expect(toApiDateFrag(TimeRangeKey.today, monday.afterClose)).toBe('20200608');
  expect(toApiDateFrag(TimeRangeKey.yesterday, tuesday.beforeOpen)).toBe('20200605');
  expect(toApiDateFrag(TimeRangeKey.yesterday, tuesday.tradingHours)).toBe('20200608');
  expect(toApiDateFrag(TimeRangeKey.today, tuesday.beforeOpen)).toBe('20200608');
  expect(toApiDateFrag(TimeRangeKey.today, tuesday.tradingHours)).toBe('20200609');
  expect(toApiDateFrag(TimeRangeKey.yesterday, wednesday.tradingHours)).toBe('20200609');
  expect(toApiDateFrag(TimeRangeKey.today, wednesday.tradingHours)).toBe('20200610');
})

test('cacheValidatorFromTimeRange', () => {
  expect(cacheValidatorFromTimeRange(TimeRangeKey.yesterday)).toBe(cachedSinceYesterdayClose);
  expect(cacheValidatorFromTimeRange(TimeRangeKey.lastMonth)).toBe(cachedSinceYesterdayClose);
  expect(cacheValidatorFromTimeRange(TimeRangeKey.today, monday.beforeOpen)).toBe(cachedSinceYesterdayClose);
  expect(cacheValidatorFromTimeRange(TimeRangeKey.today, monday.tradingHours)).toBe(cachedSinceLast15Minutes);
  expect(cacheValidatorFromTimeRange(TimeRangeKey.today, monday.afterClose)).toBe(cachedSinceTodayClose);
})

test('cacheSinceYesterdayClose', () => {
  const cachedMondayDuringTrading = monday.tradingHours.toDate().toISOString();
  const cachedMondayAfterTrading = monday.afterClose.toDate().toISOString();
  expect(cachedSinceYesterdayClose(cachedMondayDuringTrading, tuesday.tradingHours)).toBe(false);
  expect(cachedSinceYesterdayClose(cachedMondayAfterTrading, tuesday.tradingHours)).toBe(true);
})