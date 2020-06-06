import React from 'react'
import { IexKeyStats, SummaryStatsLabelMap } from '../types';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { StatsKeys } from '../constants';

const statLabelMap: SummaryStatsLabelMap = {
  peRatio: "P/E Ratio",
  marketcap: "Market Cap",
  week52high: "Year High",
  week52low: "Year Low",
  dividendYield: "Dividend Yield",
  beta: "Beta",
  ttmDividendRate: "Dividend Rate",
  ttmEPS: "Earnings Rate"
}

const statsKeys = Object.keys(statLabelMap) as StatsKeys[]

interface SummaryStatsProps {
  summaryStats: IexKeyStats
}

interface StatProps {
  label: string;
  value: number;
}
const Stat = ({ label, value }: StatProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>{label}</Typography>
        <Typography>{typeof value === 'number' && value.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  )
}

export function SummaryStats({
  summaryStats
}: SummaryStatsProps) {

  return (
    <Grid container>
      {
        statsKeys.map((key) => {
          return (
            <Grid item key={key}>
              <Stat value={summaryStats[key]} label={statLabelMap[key]} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}