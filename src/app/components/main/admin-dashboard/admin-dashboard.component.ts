import { Component } from '@angular/core';
import {Complaint, PaymentsComponent} from "../payments/payments.component";



// Complain  dummy data
const COMPLAINT_DATA: Complaint[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Payment of Bronze Plan Successfully Completed', status: 'Complete' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Payment of Bronze Plan Successfully Completed', status: 'Complete' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Payment of Bronze Plan  Successfully Completed', status: 'Complete' }
];
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})

// Complain columns
export class AdminDashboardComponent {
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status'];
  dataSource = COMPLAINT_DATA;

}
