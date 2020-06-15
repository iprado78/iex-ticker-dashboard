import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core';
import { periodStatsKeys, periodStatsLabelMap } from '../constants';
import { formatSummaryStats, aggregatePeriodStats } from '../functions';
import { Price } from '../types';
import { Stat } from './StatCard';

interface PeriodStatsProps {
  prices: Price[]
}

export function PeriodStatsGrid({
  prices
}: PeriodStatsProps) {
  const periodStats = useMemo(() => aggregatePeriodStats(prices), [prices])
  return (
    <div style={{ padding: 8 }}>
      <Grid container justify="center" spacing={2}>
        {
          Object.keys(periodStats).length && periodStatsKeys.map((key) => {
            const stat = periodStats[key];
            return (
              <Grid item key={key} xs={2} >
                <Stat value={key === 'change' ? stat.toFixed(2) + '%' : formatSummaryStats(stat)} label={periodStatsLabelMap[key]} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>

  )
}