import React from 'react'
import { SummaryStats } from '../types';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { statsKeys, statLabelMap } from '../constants';
import { formatSummaryStats, formatMarketCap } from '../functions';
import { valueToNode } from '../../node_modules/@babel/types';

interface StatProps {
  label: string;
  value: string;
}
const Stat = ({ label, value }: StatProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>{label}</Typography>
        <Typography>{value}</Typography>
      </CardContent>
    </Card>
  )
}

interface SummaryStatsProps {
  summaryStats: SummaryStats
}

export function SummaryStatsGrid({
  summaryStats
}: SummaryStatsProps) {

  return (
    <Grid container>
      {
        Object.keys(summaryStats).length && statsKeys.map((key) => {
          return (
            <Grid item key={key}>
              <Stat value={key === 'marketcap' ? formatMarketCap(summaryStats[key]) : formatSummaryStats(summaryStats[key])} label={statLabelMap[key]} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}