import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";
import {LinkDeviceComponent} from "./link-device/link-device.component";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})
export class VehiclesComponent implements OnInit{
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  addVehicle(){
    this.dialog.open(AddVehicleComponent)
  }
  linkDevice(){
    this.dialog.open(LinkDeviceComponent)
  }
}
