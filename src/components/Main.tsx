import React from 'react';
import { StockData } from '../types';

interface MainProps {
  coreData: StockData
}

export function Main({ coreData }: MainProps) {
  return (
    <main>
      <div>
        <div>
          High
        </div>
        <div>
          Low
        </div>

      </div>
      <div>
        <div>Chart 1</div>
        <div>Chart 2</div>
        <div>Chart 3</div>
      </div>
      <div>
        <div>Grid controls</div>
        <div>Grid</div>
      </div>
    </main>
  )
}