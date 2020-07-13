import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

interface StatProps {
  label: string;
  value: string;
}
export const Stat = ({ label, value }: StatProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center">{value}</Typography>
        <Typography variant="body2" align="center">{label}</Typography>
      </CardContent>
    </Card>
  )
}