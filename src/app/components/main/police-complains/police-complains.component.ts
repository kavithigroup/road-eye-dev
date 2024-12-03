import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-police-complains',
  templateUrl: './police-complains.component.html',
  styleUrls: ['./police-complains.component.sass']
})
export class PoliceComplainsComponent implements OnInit {
  displayedColumns: string[] = ['complain_id', 'send_time', 'police_station', 'subject', 'status', 'action'];
  dataSource: any[] = [];

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.api.get('/complain/all').subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  markAsReviewed(element: any): void {
    this.updateStatus(element.complain_id, 'reviewed');
  }

  updateStatus(complainId: number, status: string): void {
    this.api.post('complain/update_status', { complain_id: complainId, status }).subscribe(() => {
      this.loadComplaints(); // Reload data to reflect status change
    });
  }

  viewDetails(element: any): void {
    // Placeholder for view details functionality
    console.log('View details for:', element);
  }
}
