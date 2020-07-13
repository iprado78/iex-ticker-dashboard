import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { SummaryStats } from '../types';
import { snapshotStatsKeys, snapshotStatsLabelMap } from '../constants';
import { formatSummaryStats, formatMarketCap } from '../functions';
import { Stat } from './StatCard';

interface SummaryStatsProps {
  summaryStats: SummaryStats,
  style?: any
}

export function SummaryStatsGrid({
  summaryStats,
  style
}: SummaryStatsProps) {
  return (
    <div style={style}>
      <Typography color="textSecondary" variant="h5" style={{ paddingBottom: 16, fontWeight: "bold", }}>Summary Stats</Typography>
      <Grid container justify="space-around" spacing={2}>
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