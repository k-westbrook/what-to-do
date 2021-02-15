import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import { DivWrapper } from './structure/DivWrapper';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const Dashboard: FunctionComponent = () => {
  const [title, setTitle] = useState("What's to do");
  return (
    <div>
      <DivWrapper>
        <TextWrapper>
          <Typography variant="h2">{title}</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper position="flex-start">
        <FormWrapper>
          <Button>
            <Typography variant="h4">Add a Task</Typography>
          </Button>
          <TextField />
        </FormWrapper>
      </DivWrapper>
    </div>
  );
};

export default Dashboard;
