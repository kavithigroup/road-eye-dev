import { Component } from '@angular/core';
export interface appointment {
  id: number;
  appointmentTime: string;
  appointmentDate: string;
  vendor: string;
  status: string;
}

//dummy data used for appointments
const appointment_DATA: appointment[] = [
  { id: 1, appointmentTime: '14:30', appointmentDate: '2024-07-27', vendor: 'Jaya Maintenance', status: 'Pending' },
  { id: 2, appointmentTime: '15:00', appointmentDate: '2024-07-27', vendor: 'ABC Maintenance', status: 'Cancelled' },
  { id: 3, appointmentTime: '16:15', appointmentDate: '2024-07-27', vendor: 'Bsc Maintenance', status: 'Completed' }
];
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.sass']
})
export class AppointmentsComponent {

  //display columns for appointment table
  displayedColumns: string[] = ['id', 'appointmentTime', 'appointmentDate', 'vendor', 'status', 'action'];
  dataSource = appointment_DATA;

}
