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
import Form from './Form';
import { DivWrapper } from './structure/DivWrapper';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

const ComingSoon: FunctionComponent = () => {
  const [title, setTitle] = useState("What's to do");
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
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                lol
              </TableCell>
              <TableCell align="left">lol</TableCell>
              <TableCell align="left">lol</TableCell>
              <TableCell align="left">lol</TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="left">
                <Checkbox />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DivWrapper>
    </div>
  );
};

export default ComingSoon;
