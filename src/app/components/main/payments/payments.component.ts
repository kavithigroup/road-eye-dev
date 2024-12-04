import { Component } from '@angular/core';
import {ApiService} from "../../../services/api.service";

/**
 * Interface representing the structure of a payment record.
 */
export interface Complaint {
  id: number;               // Unique identifier for the payment record
  complaintTime: string;    // Time when the payment was made
  complaintDate: string;    // Date of the payment
  complaintSubject: string; // Remark or description related to the payment
  status: string;           // Status of the payment (e.g., Complete, Pending)
}

/**
 * Mock data to populate the table for demonstration purposes.
 * Represents a list of payment records.
 */
const COMPLAINT_DATA: Complaint[] = [
  {
    id: 1,
    complaintTime: '14:30',
    complaintDate: '2024-07-27',
    complaintSubject: 'Payment of Bronze Plan Successfully Completed',
    status: 'Complete',
  },
  {
    id: 2,
    complaintTime: '15:00',
    complaintDate: '2024-07-27',
    complaintSubject: 'Payment of Bronze Plan Successfully Completed',
    status: 'Complete',
  },
  {
    id: 3,
    complaintTime: '16:15',
    complaintDate: '2024-07-27',
    complaintSubject: 'Payment of Bronze Plan Successfully Completed',
    status: 'Complete',
  },
];

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.sass'],
})
export class PaymentsComponent {
  /**
   * Column names to display in the Angular Material table.
   */
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status', 'action'];

  /**
   * Data source for the table, containing the list of payment records.
   */
  dataSource: Complaint[] = [];

  constructor(private api: ApiService) {
    api.get("/payment/history").subscribe(r =>{
      this.dataSource = r.map((u: any) =>({
        id: u.payment_id,
        complaintTime: u.reg_time,
        complaintDate: u.reg_time,
        complaintSubject: "Subscription fee - payment",
        status: "Completed"
      }))
    })
  }
}
