import React from "react";
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Price } from "../types";
import { pricesToChart, timeRangeKeyToChartLabel } from "../functions";
import { TimeRangeKey } from "../constants";

interface PriceDataChartProps {
  ticker: string;
  timeRange: TimeRangeKey
  prices: Price[];
  style?: any
}

export function PriceDataChart({ prices, ticker, timeRange, style }: PriceDataChartProps) {
  const options: Highcharts.Options = {
    title: {
      text: `${ticker} - Draw Rect to Zoom`
    },
    chart: {
      zoomType: 'xy'
    },
    time: {
      useUTC: false
    },
    rangeSelector: {
      verticalAlign: 'top',
      x: 0,
      y: 0
    },
    yAxis: {
      title: {
        text: 'Price'
      }
    },
    xAxis: {
      type: 'datetime',
    },
    series: [{
      name: timeRangeKeyToChartLabel(timeRange),
      type: 'candlestick',
      data: pricesToChart(prices),
    } as Highcharts.SeriesCandlestickOptions]
  }
  return (
    <div style={style}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
