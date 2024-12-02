import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api.service";
import { AuthService } from "../../../services/auth.service";

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

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    // Fetch the vehicle data from the backend
    this.api.post("/vehicle/list", { user: this.auth.user?.user_id }).subscribe(response => {
      this.dataSource = response.body.map((vehicle: any, index: number) => ({
        id: index + 1,
        vehicleNumber: vehicle.vehicle_number,
        model: vehicle.model,
        brand: vehicle.brand,
        type: vehicle.type,
        color: vehicle.color,
        status: vehicle.is_verified ? "Verified" : "Not Verified", // Example if status comes differently
        date: new Date(vehicle.reg_time).toLocaleDateString()
      }));
    });
  }
}
