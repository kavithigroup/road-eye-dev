import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

export interface Location {
  id: number;
  vehicleNumber: string;
  model: string;
  brand: string;
  type: string;
  color: string;
  status: string;
  date: string;
}

@Component({
  selector: 'app-locationrequests',
  templateUrl: './locationrequests.component.html',
  styleUrls: ['./locationrequests.component.sass']
})
export class LocationrequestsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'vehicleNumber', 'brand', 'model', 'type', 'color', 'status', 'action'];
  dataSource: Location[] = [];
  private error: any;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch the vehicle data from the backend
    this.api.post('/vehicle/list', { user: this.auth.user?.user_id }).subscribe(response => {
      this.dataSource = response.body.map((vehicle: any, index: number) => ({
        id: index + 1,
        vehicleNumber: vehicle.vehicle_number,
        model: vehicle.model,
        brand: vehicle.brand,
        type: vehicle.type,
        color: vehicle.color,
        status: vehicle.is_verified ? 'Verified' : 'Not Verified',
        date: new Date(vehicle.reg_time).toLocaleDateString()
      }));
    });
  }

  // Navigate to Vehicle Search History page
  navigateToSearchHistory(vehicleNumber: string) {
    this.router.navigate(['locationrequests/vehiclesearch', vehicleNumber]);
  }

  uploadFiles(event: any, vehicleNumber: string) {
    const file = event?.target?.files[0];
    console.log(vehicleNumber)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.api.post('/vehicle/file', {
          first_name: 'AAAA',
          user: this.auth.user?.user_id,
          vehicle_number: vehicleNumber,
          file: reader.result?.toString()
        }).subscribe(httpResponse => {
          this.error = httpResponse.error;
          if (this.error === "ok")
            alert('File Uploaded!');
          else
            alert('File Uploaded!');
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
