import { Component } from '@angular/core';
import {Complaint} from "../complain/complain.component";

import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';



const COMPLAINT_DATA: Complaint[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Pending Kavithma' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Resolved' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'In Progress' },
  { id: 4, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Pending Kavithma' },
  { id: 5, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Resolved' }
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status'];
  dataSource = COMPLAINT_DATA;

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
