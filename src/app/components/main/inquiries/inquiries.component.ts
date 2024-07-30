import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

export interface inquiry {
  id: number;
  complaintTime: string;
  complaintDate: string;
  complaintSubject: string;
  status: string;
}

const COMPLAINT_DATA: inquiry[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Complete' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Complete' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Subject', status: 'Complete' }
];

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.sass']
})
export class InquiriesComponent {
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status', 'action'];
  dataSource = COMPLAINT_DATA;

  constructor(private dialog: MatDialog){

  }
  openDialog(){
    // this.dialog.open(AddInquiryComponent)
  }
}
