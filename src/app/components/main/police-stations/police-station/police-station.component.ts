import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-police-station',
  templateUrl: './police-station.component.html',
  styleUrls: ['./police-station.component.sass']
})
export class PoliceStationComponent implements OnInit {
  stationId!: number; // Station ID retrieved from the route
  stationDetails: any = {}; // Store station details
  complaints: any[] = []; // Store complaints related to this station

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    // Get station ID from route parameters
    this.route.params.subscribe((params) => {
      this.stationId = +params['id']; // Convert to a number
      this.fetchStationDetails(); // Fetch station details from backend
      this.fetchComplaints(); // Fetch complaints related to the station
    });
  }

  // Fetch station details using the station_id
  fetchStationDetails(): void {
    this.api.get(`/stations/details/${this.stationId}`).subscribe(
      (response: any) => {
        if (response && response.data) {
          this.stationDetails = response.data;
        } else {
          console.error('Station not found, redirecting...');
          this.router.navigate(['/police-stations']); // Redirect if no data
        }
      },
      (error) => {
        console.error('Failed to fetch station details:', error);
        this.router.navigate(['/police-stations']); // Redirect on error
      }
    );
  }

  // Fetch complaints related to this station (currently using dummy data)
  fetchComplaints(): void {
    // Replace with an API call when the backend is ready
    this.complaints = [
      { complaint_id: 1, description: 'Noise complaint', status: 'Resolved' },
      { complaint_id: 2, description: 'Parking violation', status: 'Pending' },
      { complaint_id: 3, description: 'Theft report', status: 'Under Investigation' }
    ];
  }

  // Handle deletion of a complaint
  deleteComplaint(complaintId: number): void {
    if (confirm('Are you sure you want to delete this complaint?')) {
      console.log(`Deleting complaint with ID: ${complaintId}`);
      this.complaints = this.complaints.filter(c => c.complaint_id !== complaintId); // Remove from list
      // Add API call for deletion here if needed
    }
  }
}
