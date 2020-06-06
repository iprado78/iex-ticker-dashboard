/**
 * This module is adapted from the example code in 
 * https://material-ui.com/components/autocomplete/#virtualization
 */

import React, { useRef } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';

const LISTBOX_PADDING = 8; // px

function ListElementRenderer(props: ListChildComponentProps) {
  const { data, index, style } = props;
  style.top = Number(style.top) || 0;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(itemCount: number) {
  const ref = useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [itemCount]);
  return ref;
}

const innerHeight = (count: number, size: number) => Math.min(8, count) * size
const verticalPadding = 2 * LISTBOX_PADDING

export const VirtualiztionContainer = React.forwardRef<HTMLUListElement>(function (props, ref) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;
  const listHeight = innerHeight(itemCount, itemSize) + verticalPadding
  const gridRef = useResetCache(itemCount);

  return (
    <ul ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={listHeight}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={() => itemSize}
          overscanCount={5}
          itemCount={itemCount}
        >
          {ListElementRenderer}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </ul>
  );
});



