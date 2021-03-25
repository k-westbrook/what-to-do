/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Typography } from '@material-ui/core';
import React, { FunctionComponent, Children } from 'react';

export const CalendarToolbarComponent: FunctionComponent<unknown> = (
  props: any
) => {
  const { label } = props;
  return (
    <div
      className="rbc-btn-group"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        alignItems: 'center',
      }}
    >
      <Button
        className="toolbar-navigation-button"
        variant="contained"
        onClick={() => props.onNavigate('PREV')}
      >
        Last
      </Button>
      <Typography variant="h6">{label}</Typography>
      <Button
        className="toolbar-navigation-button"
        variant="contained"
        onClick={() => props.onNavigate('NEXT')}
      >
        Next
      </Button>
    </div>
  );
};
