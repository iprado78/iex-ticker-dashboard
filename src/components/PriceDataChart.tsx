import React from "react";
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Price } from "../types";
import { pricesToChart } from "../functions";

interface PriceDataChartProps {
  title: string;
  prices: Price[];
}

export function PriceDataChart({ prices, title }: PriceDataChartProps) {
  const options: Highcharts.Options = {
    title: {
      text: title
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
      type: 'candlestick',
      data: pricesToChart(prices),
      turboThreshold: 2000
    } as Highcharts.SeriesCandlestickOptions]
  }
  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};
