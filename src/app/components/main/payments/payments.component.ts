import { Component } from '@angular/core';

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
  dataSource = COMPLAINT_DATA;
}
