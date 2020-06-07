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
        <Typography>{label}</Typography>
        <Typography>{value}</Typography>
      </CardContent>
    </Card>
  )
}