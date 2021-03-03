import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import CalendarComponent from './Calendar';
import ComingSoon from './ComingSoon';
import Form, { Todo } from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const Dashboard: FunctionComponent = () => {
  const [todoList, setList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    const newList = [...todoList, todo];
    setList(newList);
  };
  return (
    <div>
      <DivWrapper>
        <TextWrapper>
          <Typography variant="h2">What to Do?</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <Form addTodo={addTodo} />
      </DivWrapper>
      <DivWrapper>
        <ComingSoon todoList={todoList} />
      </DivWrapper>
      <DivWrapper>
        <CalendarComponent todoList={todoList} />
      </DivWrapper>
    </div>
  );
};

export default Dashboard;
