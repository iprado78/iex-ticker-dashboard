import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core';
import { periodStatsKeys, periodStatsLabelMap } from '../constants';
import { formatSummaryStats, aggregatePeriodStats } from '../functions';
import { Price } from '../types';
import { Stat } from './StatCard';

interface PeriodStatsProps {
  prices: Price[],
  style?: any
}

export function PeriodStatsGrid({
  prices,
  style
}: PeriodStatsProps) {
  const periodStats = useMemo(() => aggregatePeriodStats(prices), [prices])
  return (
    <Grid container justify="center" direction="column" spacing={2} style={style}>
      {
        Object.keys(periodStats).length && periodStatsKeys.map((key) => {
          const stat = periodStats[key];
          return (
            <Grid item key={key} xs={12} style={{ paddingRight: 8 }} >
              <Stat value={key === 'change' ? stat.toFixed(2) + '%' : formatSummaryStats(stat)} label={periodStatsLabelMap[key]} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}