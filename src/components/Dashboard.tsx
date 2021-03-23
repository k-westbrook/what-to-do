import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import CalendarComponent from './Calendar';
import ComingSoon from './ComingSoon';
import { StyledLink } from './elements/StyledLink';
import Form, { Todo } from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const Dashboard: FunctionComponent = () => {
  const [todoList, setList] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const addTodo = (todo: Todo) => {
    const newList = [...todoList, todo];
    setList(newList);
  };
  // replace the Link with just to="/calendar" once backend is set up
  return (
    <div>
      <DivWrapper padding="0" position="flex-start">
        <DivWrapper
          padding="0"
          height="75px"
          position="start"
          style={{ position: 'absolute' }}
        >
          <TextWrapper
            padding="1rem"
            textAlign="center"
            backgroundColor="white"
            width=" "
            height="20px"
            style={{ display: 'flex', alignItems: 'center' }}
            borderRadius="10px"
          >
            <StyledLink to={{ pathname: '/calendar', state: { todoList } }}>
              <Typography variant="h6">Calendar</Typography>
            </StyledLink>
          </TextWrapper>
        </DivWrapper>
        <DivWrapper height="75px" padding="0" style={{ flex: '1 0 auto' }}>
          <TextWrapper
            padding="1rem"
            textAlign="center"
            width=""
            height="20px"
            style={{ alignItems: 'center' }}
          >
            <Typography style={{ fontFamily: 'Berkshire Swash' }} variant="h4">
              What to Do?
            </Typography>
          </TextWrapper>
        </DivWrapper>
      </DivWrapper>
      <DivWrapper>
        <ComingSoon
          todoList={todoList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </DivWrapper>
      <DivWrapper>
        <Form addTodo={addTodo} />
      </DivWrapper>
    </div>
  );
};

export default Dashboard;
