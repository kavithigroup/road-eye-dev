import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Track {
  timestamp: number;
  lon: number;
  lat: number;
  device: number;
}

@Component({
  selector: 'app-vehicle-search-history',
  templateUrl: './vehicle-search-history.component.html',
  styleUrls: ['./vehicle-search-history.component.sass']
})
export class VehicleSearchHistoryComponent implements OnInit {

  displayedColumns: string[] = ['timestamp', 'lon', 'lat', 'device'];
  dataSource: Track[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the vehicle ID from the route
    const vehicleId = this.route.snapshot.paramMap.get('vehicleId');

    // Hardcoded data for demonstration
    this.dataSource = [
      { timestamp: 1633036800, lon: 79.861244, lat: 6.927079, device: 1 },
      { timestamp: 1633123200, lon: 79.863144, lat: 6.929979, device: 2 },
      { timestamp: 1633209600, lon: 79.865044, lat: 6.932879, device: 3 },
    ];
  }
}
