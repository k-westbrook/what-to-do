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

const rowsPerPage = 5;
const customColumnStyle = (width: string) => ({
  width,
});

const ComingSoon: FunctionComponent<ComingSoonProps> = (props: any) => {
  const [title, setTitle] = useState("What's to do");
  const {
    todoList,
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
  } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <DivWrapper>
        <TextWrapper>
          <Typography variant="h4">Coming Soon</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <Table style={{ width: '1400px' }}>
          <TableHead>
            <TableRow>
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
                  <TableRow>
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
              <TableRow>
                <TableCell
                  style={customColumnStyle('100%')}
                  colSpan={4}
                  align="center"
                >
                  No events
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <TablePagination
                  rowsPerPageOptions={[3, 4, 5]}
                  count={todoList.length}
                  rowsPerPage={5}
                  page={currentPage}
                  onChangePage={handleChangePage}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  component="div"
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DivWrapper>
    </div>
  );
};

export default ComingSoon;
