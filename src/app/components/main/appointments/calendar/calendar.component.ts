import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent {


  //full calander options parameters
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Appointment 1', date: '2024-07-27' },
      { title: 'Appointment 2', date: '2024-07-30' }
    ]
  };

  //date click function
  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr);
  }
}
