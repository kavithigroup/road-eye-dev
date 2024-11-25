import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

interface PoliceRequest {
  id: number;
  requestTime: string;
  requestDate: string;
  vehicleId: string;
  registration: string;
  status: string;
}

@Component({
  selector: 'app-police-requests',
  templateUrl: './police-requests.component.html',
  styleUrls: ['./police-requests.component.sass']
})
export class PoliceRequestsComponent implements OnInit {
  dataSource: PoliceRequest[] = [
    // Initial data, replace with actual data or fetch from a service
    { id: 1, requestTime: '2023-11-25 10:00 AM', requestDate: '2023-11-25', vehicleId: 'AB1234', registration: 'XYZ123', status: 'Pending' },
    { id: 2, requestTime: '2023-11-26 02:00 PM', requestDate: '2023-11-26', vehicleId: 'CD5678', registration: 'PQR456', status: 'In Progress' }
  ];

  displayedColumns: string[] = ['id', 'requestTime', 'requestDate', 'vehicleId', 'registration', 'status', 'actions'];

  constructor(private router: Router) {}

  ngOnInit() {
    // this.policeRequestService.getPoliceRequests().subscribe(data => {
    //   this.dataSource = data;
    // });
  }

  addRequest() {
    this.router.navigate(['/police-requests/new']);
  }

  viewRequest(requestId: number) {
    this.router.navigate(['/police-requests/view', requestId]);
  }

  cancelRequest(requestId: number) {
    // Implement cancellation logic
  }
}
