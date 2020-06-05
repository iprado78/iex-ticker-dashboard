import React, { useEffect, useState, useCallback } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { getSymbols } from '../services/IexClient';
import { IexSymbol, ActiveTickerAction, UiStateAction } from '../types';
import { UiStateKey } from '../constants';

interface Option {
  label: string;
  value: string;
}

interface SelectTickerProps {
  updateUiState: React.Dispatch<UiStateAction>
}

export function SelectTicker({ updateUiState }: SelectTickerProps) {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getSymbols().then(apiSymbols => {
      setOptions(apiSymbols.map(apiSymbolToOption))
    })
  }, [])

  const handleTickerSelect = useCallback((e: React.ChangeEvent<{}>, selectedOption: Option | null) => {
    if (selectedOption && selectedOption.value) {
      updateUiState({
        type: UiStateKey.activeTicker,
        payload: selectedOption.value
      } as ActiveTickerAction)
    }
  }, [updateUiState])

  return (
    <Autocomplete
      style={{ width: 600 }}
      onChange={handleTickerSelect}
      getOptionLabel={option => option.label} options={options}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  )
}

function apiSymbolToOption({ symbol, name }: IexSymbol): Option {
  return {
    label: `${symbol} - ${name}`,
    value: symbol
  }
}