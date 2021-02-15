import { Button, TextField, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const Form: FunctionComponent = () => {
  return (
    <FormWrapper>
      <FormItem>
        <TextField variant="outlined" />
      </FormItem>
      <FormItem>
        <Button variant="contained" style={{ height: '100%' }}>
          Add a Task
        </Button>
      </FormItem>
    </FormWrapper>
  );
};

export default Form;
