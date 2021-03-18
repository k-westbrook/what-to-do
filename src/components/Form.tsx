import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { FormItem } from './structure/FormItem';
import { FormWrapper } from './structure/FormWrapper';

const currentDate = new Date();
const currentMonth =
  currentDate.getMonth() < 11
    ? `0${currentDate.getMonth() + 1}`
    : currentDate.getMonth() + 1;
const concatDateString = `${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}`;
const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

export interface Todo {
  category: Category;
  name: string;
  date: any;
  time: any;
  complete: boolean;
}
export enum Category {
  SOCIAL = 'Social',
  WORK = 'Work',
  HOME = 'Home',
  ERRAND = 'Errand',
  TRAVEL = 'Travel',
  PET = 'Pet',
  OTHER = 'Other',
}

const defaultTodo = {
  category: Category.OTHER,
  name: 'Event',
  date: concatDateString,
  time: currentTime,
  complete: false,
};

const Form: FunctionComponent<{ addTodo: any }> = (props: any) => {
  const [todo, setTodo] = useState(defaultTodo);
  const handleChange = (name: any) => (event: any) => {
    setTodo({ ...todo, [name]: event.target.value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.addTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <FormItem flex>
          <Select
            name="category"
            value={todo.category}
            style={{ width: '200px' }}
            onChange={handleChange('category')}
          >
            <MenuItem value={Category.SOCIAL}>Social</MenuItem>
            <MenuItem value={Category.WORK}>Work</MenuItem>
            <MenuItem value={Category.HOME}>Home</MenuItem>
            <MenuItem value={Category.ERRAND}>Errand</MenuItem>
            <MenuItem value={Category.TRAVEL}>Travel</MenuItem>
            <MenuItem value={Category.PET}>Pet</MenuItem>
            <MenuItem value={Category.OTHER}>Other</MenuItem>
          </Select>
        </FormItem>
        <FormItem flex alignItems="flex-end">
          <TextField
            name="todo"
            onChange={handleChange('name')}
            placeholder="Description"
            required
          />
        </FormItem>
        <FormItem flex alignItems="flex-end">
          <TextField
            name="date"
            type="date"
            defaultValue={concatDateString}
            onChange={handleChange('date')}
            required
          />
        </FormItem>
        <FormItem flex alignItems="flex-end">
          <TextField
            name="time"
            type="time"
            defaultValue={currentTime}
            onChange={handleChange('time')}
            style={{ width: '100px' }}
            required
          />
        </FormItem>
        <FormItem>
          <Button type="submit" variant="contained" style={{ height: '100%' }}>
            Add a Task
          </Button>
        </FormItem>
      </FormWrapper>
    </form>
  );
};

export default Form;
