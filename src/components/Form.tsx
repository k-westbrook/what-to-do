import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';
import { TextWrapper } from './structure/TextWrapper';

enum Category {
  SOCIAL,
  WORK,
  HOME,
  ERRAND,
  TRAVEL,
  PET,
  OTHER,
}
const Form: FunctionComponent = () => {
  return (
    <FormWrapper>
      <FormItem>
        <TextField variant="outlined" />
      </FormItem>
      <FormItem>
        <Button variant="contained" style={{ height: '100%' }}>
          Add a Task
        </Button>
      </FormItem>
      <FormItem>
        <Select value={Category.SOCIAL} style={{ width: '200px' }}>
          <MenuItem value={Category.SOCIAL}>Social</MenuItem>
          <MenuItem value={Category.WORK}>Work</MenuItem>
          <MenuItem value={Category.HOME}>Home</MenuItem>
          <MenuItem value={Category.ERRAND}>Errand</MenuItem>
          <MenuItem value={Category.TRAVEL}>Travel</MenuItem>
          <MenuItem value={Category.PET}>Pet</MenuItem>
          <MenuItem value={Category.OTHER}>Other</MenuItem>
        </Select>
      </FormItem>
    </FormWrapper>
  );
};

export default Form;
