import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { RequestDetailsPopupComponent } from './request-details-popup/request-details-popup.component';

@Component({
  selector: 'app-police-requests',
  templateUrl: './police-requests.component.html',
  styleUrls: ['./police-requests.component.sass']
})
export class PoliceRequestsComponent implements OnInit {
  displayedColumns: string[] = [
    'request_id',
    'request_date',
    'requested_time',
    'vehicle_id',
    'registration_status',
    'request_status',
    'actions'
  ];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private api: ApiService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.fetchPoliceRequests();
  }

  addRequest() {
    this.router.navigate(['/police-requests/new']);
  }

  fetchPoliceRequests(): void {
    const policeId = 1; // Hardcoded for now, replace with dynamic value as needed
    this.api.get(`/police-requests/details/${policeId}`).subscribe(
      (response: any) => {
        this.dataSource.data = response;
        console.log('Fetched data:', this.dataSource.data); // Debugging output
      },
      (error) => {
        console.error('Failed to fetch police requests:', error);
      }
    );
  }

  openDetailsPopup(request: any): void {
    this.dialog.open(RequestDetailsPopupComponent, {
      width: '600px',
      data: request
    });
  }
}
