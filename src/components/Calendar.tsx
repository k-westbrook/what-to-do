import { Button, TextField, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const Calendar: FunctionComponent = () => {
  return (
    <TextWrapper>
      <Typography>Calendar</Typography>
    </TextWrapper>
  );
};

export default Calendar;
