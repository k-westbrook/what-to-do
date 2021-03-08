import {
  Button,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Typography,
  Checkbox,
  TableFooter,
  TablePagination,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core';
import React, { useState, FunctionComponent } from 'react';
import Form, { Todo } from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

interface ComingSoonProps {
  todoList: Todo[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: any;
  setTotalPages: any;
}

const ComingSoon: FunctionComponent<ComingSoonProps> = (props: any) => {
  const [title, setTitle] = useState("What's to do");
  const {
    todoList,
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
  } = props;
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
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Name</TableCell>
            </TableRow>
          </TableHead>
          {todoList.length > 0 && (
            <TableBody>
              {todoList.map((todo: any) => (
                <TableRow>
                  <TableCell align="left">{todo.date}</TableCell>
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[3, 4, 5]}
                colSpan={3}
                count={todoList.length}
                rowsPerPage={5}
                page={currentPage}
                onChangePage={() => {
                  console.log('here');
                }}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                component="div"
              />
            </TableRow>
          </TableFooter>
        </Table>
      </DivWrapper>
    </div>
  );
};

export default ComingSoon;
