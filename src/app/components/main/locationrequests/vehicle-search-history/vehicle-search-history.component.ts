import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

export interface Track {
  timestamp: number | string; // Handle both number and string formats
  lon: number;
  lat: number;
  device: number;
  number_plate: string;
  city?: string
}

@Component({
  selector: 'app-vehicle-search-history',
  templateUrl: './vehicle-search-history.component.html',
  styleUrls: ['./vehicle-search-history.component.sass']
})
export class VehicleSearchHistoryComponent implements OnInit {

  displayedColumns: string[] = ['timestamp', "city", 'lon', 'lat', 'device', 'number_plate'];
  dataSource: Track[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const vehicleId = this.route.snapshot.paramMap.get('vehicleId');
    if (vehicleId) {
      this.api.get(`/company/search/${vehicleId}`).subscribe((response: any[]) => {
        this.dataSource = response.map(item => {
          // Convert timestamp to ISO string if it's a number
          const timestamp = typeof item.timestamp === 'number'
            ? new Date(item.timestamp).toISOString()
            : item.timestamp;

          // Split the ISO string into date and time
          const [date, time] = timestamp.split('T');
          return {
            ...item,
            formattedRegTime: `${date} - ${time}`
          };
        });
      });
    }
  }

}
