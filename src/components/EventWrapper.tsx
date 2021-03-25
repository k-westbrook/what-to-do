import { Typography } from '@material-ui/core';
import React, { FunctionComponent, Children } from 'react';
import { CalendarEventWrapper } from './structure/CalendarEventWrapper';

export const EventWrapperComponent: FunctionComponent<unknown> = (
  props: any
) => {
  const { event } = props;
  return (
    <CalendarEventWrapper>
      <Typography variant="body2">{event.title}</Typography>
    </CalendarEventWrapper>
  );
};
