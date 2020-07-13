import React, { useCallback, useMemo } from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { ActiveTickerAction, UiStateAction, Option, Ticker } from '../../types';
import { VirtualiztionContainer } from './VirtualizationContainer';
import { tickersToOptions } from '../../functions';
import { DEFAULT_OPTION } from '../../constants';

interface SelectTickerProps {
  tickers: Ticker[],
  selectedTicker: string,
  dispatch: React.Dispatch<UiStateAction>,
  action: (ticker: string) => ActiveTickerAction
}

const useStyles = makeStyles({
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
  root: {
    width: 500,
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
    '&:hover .MuiInput-underline:before': {
      borderBottomColor: 'white'
    },
    '&:hover .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
  },
  input: {
    color: 'white',
  },
  endAdornment: {
    '& .MuiSvgIcon-root': {
      fill: '#FFF'
    },
  }
});

export function SelectTicker({ selectedTicker, dispatch, action, tickers }: SelectTickerProps) {
  const tickerOptions = useMemo(() => tickersToOptions(tickers), [tickers])
  const selectedTickerOption = useMemo(() => tickerOptions.find(symbol => symbol.value === selectedTicker) || DEFAULT_OPTION, [tickerOptions, selectedTicker])

  const handleTickerSelect = useCallback((e: React.ChangeEvent<{}>, selectedOption: Option | null) => {
    if (selectedOption && selectedOption.value) {
      dispatch(action(selectedOption.value))
    }
  }, [dispatch, action])

  const classes = useStyles();

  return (
    <Autocomplete
      classes={classes}
      autoComplete
      value={selectedTickerOption}
      onChange={handleTickerSelect}
      ListboxComponent={VirtualiztionContainer as any}
      getOptionLabel={option => option.label} options={tickerOptions}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}