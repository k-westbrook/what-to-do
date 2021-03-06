import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { FunctionComponent, Children } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { TextWrapper } from './structure/TextWrapper';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DivWrapper } from './structure/DivWrapper';
import { Todo } from './Form';
import { StyledLink } from './elements/StyledLink';
import { CalendarToolbarComponent } from './CalendarToolbar';
import { EventWrapperComponent } from './EventWrapper';

const localizer = momentLocalizer(moment);

const transformDates = (data: any) => {
  const newTodoSet = data.map((todo: Todo) => {
    const title = todo.name ? todo.name : 'Event';
    const dateArray = todo.date.split('-');
    const start = new Date(
      Number(dateArray[0]),
      Number(dateArray[1]) - 1,
      Number(dateArray[2]),
      10,
      0
    );
    const end = new Date(
      Number(dateArray[0]),
      Number(dateArray[1]) - 1,
      Number(dateArray[2]),
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

// const ColoredDateCellWrapper = ({ children, value }: any) =>
//   React.cloneElement(Children.only(children), {
//     style: {
//       ...children.style,
//       fontFamily: 'Poppins',
//       backgroundColor: 'white',
//     },
//   });

const CalendarComponent: FunctionComponent<{ todoList: any }> = (
  props: any
) => {
  // todo: replace this with a fetch to backend
  const { location } = props;
  const { todoList } = location.state;
  const all = transformDates(todoList);
  const todayDate = new Date();
  return (
    <div>
      <DivWrapper padding="0" height="50px" position="start">
        <TextWrapper
          padding="1rem"
          textAlign="center"
          backgroundColor="white"
          width=" "
          height="20px"
          style={{ display: 'flex', alignItems: 'center' }}
          borderRadius="10px"
        >
          <StyledLink to="/">
            <Typography variant="h6">Dashboard</Typography>
          </StyledLink>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <TextWrapper>
          <Typography variant="h4">Calendar</Typography>
        </TextWrapper>
      </DivWrapper>
      <DivWrapper>
        <Calendar
          localizer={localizer}
          events={all}
          defaultDate={
            new Date(
              todayDate.getFullYear(),
              todayDate.getMonth(),
              todayDate.getDate()
            )
          }
          view="month"
          views={['month']}
          style={{
            height: '500px',
            width: '900px',
            backgroundColor: 'white',
            borderStyle: 'solid',
          }}
          components={{
            // you have to pass your custom wrapper here
            // so that it actually gets used
            toolbar: CalendarToolbarComponent,
            eventWrapper: EventWrapperComponent,
          }}
        />
      </DivWrapper>
    </div>
  );
};

export default CalendarComponent;
