import {
  Button,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Typography,
  Checkbox,
} from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import Form, { Todo } from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const ComingSoon: FunctionComponent<{ todoList: Todo[] }> = (props: any) => {
  const [title, setTitle] = useState("What's to do");
  const { todoList } = props;
  console.log(todoList);
  return (
    <div>
      <DivWrapper>
        <TextWrapper>
          <Typography variant="h4">Coming Soon</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Name</TableCell>
            </TableRow>
          </TableHead>
          {todoList.length > 0 && (
            <TableBody>
              {todoList.map((todo: any) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {todo.date}
                  </TableCell>
                  <TableCell align="left">{todo.time}</TableCell>
                  <TableCell align="left">{todo.category}</TableCell>
                  <TableCell align="left">{todo.name}</TableCell>
                  <TableCell style={{ borderBottom: 'none' }} align="left">
                    <Checkbox />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </DivWrapper>
    </div>
  );
};

export default ComingSoon;
