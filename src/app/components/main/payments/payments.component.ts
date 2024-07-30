import { Component } from '@angular/core';


export interface Complaint {
  id: number;
  complaintTime: string;
  complaintDate: string;
  complaintSubject: string;
  status: string;
}
const COMPLAINT_DATA: Complaint[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Payment of Bronze Plan Successfully Completed', status: 'Complete' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Payment of Bronze Plan Successfully Completed', status: 'Complete' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Payment of Bronze Plan  Successfully Completed', status: 'Complete' }
];
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.sass']
})
export class PaymentsComponent {

  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status', 'action'];
  dataSource = COMPLAINT_DATA;

}
