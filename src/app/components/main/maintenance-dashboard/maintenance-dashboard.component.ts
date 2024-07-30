import { Component } from '@angular/core';
import {appointment, AppointmentsComponent} from "../appointments/appointments.component";

import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

const appointment_DATA: appointment[] = [
  { id: 1, appointmentTime: '14:30', appointmentDate: '2024-07-27', vendor: 'ABC Maintenance', status: 'Pending' },
  { id: 2, appointmentTime: '15:00', appointmentDate: '2024-07-27', vendor: 'ABC Maintenance', status: 'Cancelled' },
  { id: 3, appointmentTime: '16:15', appointmentDate: '2024-07-27', vendor: 'Bsc Maintenance', status: 'Completed' }
];

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.component.html',
  styleUrls: ['./maintenance-dashboard.component.sass']
})
export class MaintenanceDashboardComponent {
  displayedColumns: string[] = ['id', 'appointmentTime', 'appointmentDate', 'vendor', 'status'];
  dataSource = appointment_DATA;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Appointment 1', date: '2024-07-10' },
      { title: 'Appointment 2', date: '2024-07-05' }
    ]
  };

  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr);
  }

}
