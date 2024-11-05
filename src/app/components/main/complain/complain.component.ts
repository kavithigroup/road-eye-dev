import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface Complaint {
  id: number;
  complaintTime: string;
  complaintDate: string;
  complaintSubject: string;
  status: string;
}
const COMPLAINT_DATA: Complaint[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Complete' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Complete' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Complete' }
];
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.sass']
})
export class ComplainComponent {

  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status', 'action'];
  dataSource= COMPLAINT_DATA;


}
