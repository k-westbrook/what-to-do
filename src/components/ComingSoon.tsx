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
import styled from 'styled-components';
import Form, { Todo } from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

interface ComingSoonProps {
  todoList: Todo[];
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage: any;
  setRowsPerPage: any;
}

const rowsPerPageDiv = styled.div`
  max-height: 40px;
`;

const customColumnStyle = (width: string) => ({
  width,
});

const ComingSoon: FunctionComponent<ComingSoonProps> = (props: any) => {
  const [title, setTitle] = useState("What's to do");
  const {
    todoList,
    currentPage,
    rowsPerPage,
    setCurrentPage,
    setRowsPerPage,
  } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  return (
    <div>
      <DivWrapper height="60px" padding="0">
        <TextWrapper>
          <Typography variant="h5">Coming Soon</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper height="275px">
        <Table
          style={{
            width: '900px',
          }}
        >
          {todoList.length > 0 && (
            <TableHead>
              <TableRow style={{ maxHeight: '10px' }}>
                <TableCell style={customColumnStyle('20%')} align="left">
                  Date
                </TableCell>
                <TableCell style={customColumnStyle('20%')} align="left">
                  Time
                </TableCell>
                <TableCell style={customColumnStyle('30%')} align="left">
                  Category
                </TableCell>
                <TableCell style={customColumnStyle('30%')} align="left">
                  Name
                </TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {todoList.length > 0 ? (
              (todoList.length > 0
                ? todoList.slice(
                    currentPage * rowsPerPage,
                    currentPage * rowsPerPage + rowsPerPage
                  )
                : todoList
              ).map((todo: any) => {
                return (
                  <TableRow style={{ maxHeight: '10px' }}>
                    <TableCell style={customColumnStyle('15%')} align="left">
                      {todo.date}
                    </TableCell>
                    <TableCell style={customColumnStyle('15%')} align="left">
                      {todo.time}
                    </TableCell>
                    <TableCell style={customColumnStyle('30%')} align="left">
                      {todo.category}
                    </TableCell>
                    <TableCell style={customColumnStyle('40%')} align="left">
                      {todo.name}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <DivWrapper>
                <TextWrapper>
                  <Typography variant="h6">No upcoming events</Typography>
                </TextWrapper>
              </DivWrapper>
            )}
          </TableBody>
          {todoList.length > 0 && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>
                  <TablePagination
                    rowsPerPageOptions={[2, 3]}
                    count={todoList.length}
                    rowsPerPage={rowsPerPage}
                    page={currentPage}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    component={rowsPerPageDiv}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </DivWrapper>
    </div>
  );
};

export default ComingSoon;
