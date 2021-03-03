import { Button, TextField, Typography } from '@material-ui/core';
import React, { FunctionComponent, Children } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { TextWrapper } from './structure/TextWrapper';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DivWrapper } from './structure/DivWrapper';
import { Todo } from './Form';

const localizer = momentLocalizer(moment);

const transformDates = (data: any) => {
  const newTodoSet = data.map((todo: Todo) => {
    const title = todo.name ? todo.name : 'Event';
    const dateArray = todo.date.split('-');
    console.log(dateArray);
    const start = new Date(
      Number(dateArray[0]),
      Number(dateArray[2]) + 1,
      Number(dateArray[1]),
      10,
      0
    );
    const end = new Date(
      Number(dateArray[0]),
      Number(dateArray[2]) + 1,
      Number(dateArray[1]),
      14,
      0
    );
    const event: Event = {
      title,
      start,
      end,
    };
    return event;
  });
  return newTodoSet;
};

interface Event {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
}
const ColoredDateCellWrapper = ({ children, value }: any) =>
  React.cloneElement(Children.only(children), {
    style: {
      ...children.style,
      fontFamily: 'Poppins',
      backgroundColor: 'white',
    },
  });

const CalendarComponent: FunctionComponent<{ todoList: any }> = (
  props: any
) => {
  const { todoList } = props;
  const all = transformDates(todoList);
  const todayDate = new Date();
  return (
    <div>
      <DivWrapper>
        <TextWrapper>
          <Typography>Calendar</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <Calendar
          localizer={localizer}
          events={[
            {
              title: 'My event',
              allDay: false,
              start: new Date(2021, 2, 6, 10, 0), // 10.00 AM
              end: new Date(2021, 2, 6, 14, 0), // 2.00 PM
            },
          ]}
          defaultDate={
            new Date(
              todayDate.getFullYear(),
              todayDate.getMonth(),
              todayDate.getDate()
            )
          }
          view="month"
          views={['month']}
          style={{ height: '500px', width: '700px' }}
          components={{
            // you have to pass your custom wrapper here
            // so that it actually gets used
            dateCellWrapper: ColoredDateCellWrapper,
          }}
        />
      </DivWrapper>
    </div>
  );
};

export default CalendarComponent;
