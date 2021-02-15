import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import Calendar from './Calendar';
import ComingSoon from './ComingSoon';
import Form from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
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
        <Form />
      </DivWrapper>
      <DivWrapper>
        <ComingSoon />
      </DivWrapper>
      <DivWrapper>
        <Calendar />
      </DivWrapper>
    </div>
  );
};

export default Dashboard;
