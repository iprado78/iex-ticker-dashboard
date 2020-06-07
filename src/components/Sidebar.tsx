import React from 'react';
import { CompanyData } from '../types';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import { StockDataKey, stockTypeLabelMap } from '../constants';

interface SidebarProps {
  companyData: CompanyData
}

export function Sidebar({ companyData }: SidebarProps) {
  const { description, companyName, exchange } = companyData[StockDataKey.company]
  const { url } = companyData[StockDataKey.logo]
  return (
    <aside>
      <Card>
        <CardHeader
          avatar={<img src={url} alt={`${companyName} Logo`} />}
          title={companyName}
          subheader={exchange}
        />
        <CardContent>
          <Typography component="p" variant="body1">
            {
              description
            }
          </Typography>
        </CardContent>
      </Card>
    </aside>
  )
}


