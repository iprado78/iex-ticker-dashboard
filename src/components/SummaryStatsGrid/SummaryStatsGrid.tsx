import React from 'react'
import { SummaryStats } from '../../types';
import { Grid } from '@material-ui/core';
import { statsKeys, statLabelMap } from '../../constants';
import { formatSummaryStats, formatMarketCap } from '../../functions';
import { Stat } from './StatCard';

interface SummaryStatsProps {
  summaryStats: SummaryStats
}

export function SummaryStatsGrid({
  summaryStats
}: SummaryStatsProps) {

  return (
    <div style={{ padding: 8 }}>
      <Grid container justify="center" spacing={2}>
        {
          Object.keys(summaryStats).length && statsKeys.map((key) => {
            return (
              <Grid item key={key} xs={2} >
                <Stat value={key === 'marketcap' ? formatMarketCap(summaryStats[key]) : formatSummaryStats(summaryStats[key])} label={statLabelMap[key]} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>

  )
}