import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core';
import { SummaryStats } from '../types';
import { snapshotStatsKeys, snapshotStatsLabelMap } from '../constants';
import { formatSummaryStats, formatMarketCap } from '../functions';
import { Stat } from './StatCard';

interface SummaryStatsProps {
  summaryStats: SummaryStats
}

export function SummaryStatsGrid({
  summaryStats
}: SummaryStatsProps) {
  return (
    <div style={{ padding: 8 }}>
      <Typography align="center" color="textSecondary">Current Value</Typography>
      <Divider />
      <Grid container justify="center" spacing={2}>
        {
          Object.keys(summaryStats).length && snapshotStatsKeys.map((key) => {
            return (
              <Grid item key={key} xs={2} >
                <Stat value={key === 'marketcap' ? formatMarketCap(summaryStats[key]) : formatSummaryStats(summaryStats[key])} label={snapshotStatsLabelMap[key]} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>

  )
}