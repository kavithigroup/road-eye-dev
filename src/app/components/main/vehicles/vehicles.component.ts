import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";
import {LinkDeviceComponent} from "./link-device/link-device.component";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})
export class VehiclesComponent implements OnInit {

  vehicles: {
    vehicle_id: number
    vehicle_number: string
    brand: string
    model: string

  }[] = []

  constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthService) {
  }

  ngOnInit() {
    this.api.post("/vehicle/list", {user: this.auth.user?.user_id}).subscribe(httpResponse => {
      this.vehicles = httpResponse.body
    })

  }

  addVehicle() {
    this.dialog.open(AddVehicleComponent).afterClosed().subscribe(_ =>{
      this.ngOnInit()
    })
  }

  linkDevice() {
    this.dialog.open(LinkDeviceComponent)
  }
}
