import React from 'react';
import { CoreData } from '../types';

interface MainProps {
  coreData: CoreData
}

export function Main({ coreData }: MainProps) {
  console.log(coreData)
  return (
    <main>
      <div>Summary stats row</div>
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