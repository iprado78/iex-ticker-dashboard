import React, { useCallback } from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { ActiveTickerAction, UiStateAction, Option } from '../../types';
import { VirtualiztionContainer } from './VirtualizationContainer';

interface SelectTickerProps {
  symbolOptions: Option[],
  selectedSymbolOption: Option,
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
    width: 600
  }
});

export function SelectTicker({ selectedSymbolOption, dispatch, action, symbolOptions }: SelectTickerProps) {

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
      value={selectedSymbolOption}
      onChange={handleTickerSelect}
      ListboxComponent={VirtualiztionContainer as any}
      getOptionLabel={option => option.label} options={symbolOptions}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}