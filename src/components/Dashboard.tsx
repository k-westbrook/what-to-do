import { Typography } from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import { TextWrapper } from './structure/TextWrapper';


const Dashboard: FunctionComponent = () => {
  const [title, setTitle] = useState("What's to do");
  return (
    <TextWrapper>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h4">Add a Task</Typography>

    </TextWrapper>

  );
}

export default Dashboard;
