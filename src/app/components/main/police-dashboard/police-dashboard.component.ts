import { Component } from '@angular/core';

// Interface for Complaint Data
export interface Complaint {
  id: number;             // Unique ID for the complaint
  complaintTime: string;  // Time when the complaint was logged
  complaintDate: string;  // Date when the complaint was logged
  complaintSubject: string; // Short description or subject of the complaint
  status: string;         // Current status of the complaint (e.g., Pending, Resolved)
}

// Mock Data: Static list of complaints for demonstration purposes
const COMPLAINT_DATA: Complaint[] = [
  { id: 1, complaintTime: '14:30', complaintDate: '2024-07-27', complaintSubject: 'Road accident near Elm Street', status: 'Pending' },
  { id: 2, complaintTime: '15:00', complaintDate: '2024-07-27', complaintSubject: 'Noise complaint', status: 'Resolved' },
  { id: 3, complaintTime: '16:15', complaintDate: '2024-07-27', complaintSubject: 'Missing person inquiry', status: 'In Progress' },
  { id: 4, complaintTime: '17:00', complaintDate: '2024-07-27', complaintSubject: 'Theft report', status: 'Resolved' },
  { id: 5, complaintTime: '18:30', complaintDate: '2024-07-27', complaintSubject: 'Parking violation', status: 'Pending' },
];

@Component({
  selector: 'app-police-dashboard', // Component selector for usage in templates
  templateUrl: './police-dashboard.component.html', // HTML template path
  styleUrls: ['./police-dashboard.component.sass']  // SASS stylesheet path
})
export class PoliceDashboardComponent {
  // Columns to be displayed in the complaints table
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status'];

  // Data source for the Material table
  dataSource = COMPLAINT_DATA;
}
