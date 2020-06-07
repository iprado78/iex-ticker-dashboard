import React, { useCallback } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { TimeRangeKey } from '../constants';
import { TimeRangeAction, UiStateAction } from '../types';

const useStyles = makeStyles({
  root: {
    width: '150px',
  },
  label: {
    fontSize: "14px"
  }
});
const id = "time-range-select";

interface SelectTimeRangeProps {
  value: TimeRangeKey,
  action: (timeRange: TimeRangeKey) => TimeRangeAction,
  dispatch: React.Dispatch<UiStateAction>
}

export function SelectTimeRange({ value, dispatch, action }: SelectTimeRangeProps) {
  const classes = useStyles()
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(action(e.target.value as TimeRangeKey))
  }, [dispatch, action])

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label={id}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        row
      >
        {Object.values(TimeRangeKey).map(key => (
          <FormControlLabel
            key={key}
            classes={classes}
            value={key}
            control={<Radio />}
            label={key}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

