import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-police-station',
  templateUrl: './police-station.component.html',
  styleUrls: ['./police-station.component.sass']
})
export class PoliceStationComponent implements OnInit {
  stationId!: number; // Station ID retrieved from the route
  stationDetails: any = { branch: 'Police Station' }; // Placeholder station details
  complaints: any[] = []; // Placeholder complaints

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get station ID from route parameters
    this.route.params.subscribe((params) => {
      this.stationId = +params['id']; // Convert to a number
      this.loadStationData(); // Load station name and dummy complaints
    });
  }

  // Load dummy station name and complaints
  loadStationData(): void {
    this.complaints = [
      { complaint_id: 1, name: 'Samantha Perera', type: 'Accident', summary: 'Car collided with a motorcycle at a junction', location: 'No. 10, High Level Road, Maharagama' },
      { complaint_id: 2, name: 'Priyantha Silva', type: 'Reckless Driving', summary: 'Bus overtaking dangerously near a pedestrian crossing', location: 'No. 120, Galle Road, Mount Lavinia' },
      { complaint_id: 3, name: 'Ruwantha Fernando', type: 'Hit-and-Run', summary: 'Vehicle fled after hitting a pedestrian on the main road', location: 'No. 55, Kandy Road, Kadawatha' },
      { complaint_id: 4, name: 'Dilani Weerasinghe', type: 'Traffic Obstruction', summary: 'Truck parked on the roadside blocking traffic flow', location: 'No. 8, Negombo Road, Ja-Ela' },
      { complaint_id: 5, name: 'Nuwan Jayasuriya', type: 'Theft', summary: 'Motorbike stolen while parked near a shopping complex', location: 'No. 77, Old Moor Street, Colombo 12' }
    ];
    
  }
}
