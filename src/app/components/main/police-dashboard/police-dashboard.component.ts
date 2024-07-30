import { Component } from '@angular/core';
import {Complaint} from "../complain/complain.component";

const COMPLAINT_DATA: Complaint[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Pending Kavithma' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Resolved' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'In Progress' },
  { id: 4, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Pending Kavithma' },
  { id: 5, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Resolved' }
];

@Component({
  selector: 'app-police-dashboard',
  templateUrl: './police-dashboard.component.html',
  styleUrls: ['./police-dashboard.component.sass']
})
export class PoliceDashboardComponent {
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status'];
  dataSource = COMPLAINT_DATA;
}
