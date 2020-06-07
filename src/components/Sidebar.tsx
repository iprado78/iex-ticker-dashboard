import React from 'react';
import { CompanyData } from '../types';
import { Typography, Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import { StockDataKey } from '../constants';

interface SidebarProps {
  companyData: CompanyData
}

export function Sidebar({ companyData }: SidebarProps) {
  const { description, companyName, exchange } = companyData[StockDataKey.company]
  const { url } = companyData[StockDataKey.logo]
  return (
    <aside style={{ padding: 8 }} >
      <Card>
        <CardHeader
          style={{ height: 150 }}
          avatar={<img src={url} alt={`${companyName} Logo`} />}
          title={companyName}
          subheader={exchange}
        />
        <Divider />
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


