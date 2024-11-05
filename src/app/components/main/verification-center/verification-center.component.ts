import {Component, OnInit} from '@angular/core';
import {AddVehicleComponent} from "../vehicles/add-vehicle/add-vehicle.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";
import {UserVerificationDetailsComponent} from "./user-verification-details/user-verification-details.component";
import {VehicleVerificationDetailsComponent} from "./vehicle-verification-details/vehicle-verification-details.component";

export interface userVerification {
  date: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface vehicleVerification {
  date: string;
  vehicleNumber: string;
  owner: string;
  leasing: string;
}

const USER_TABLE_DATA: userVerification[] = [
  {date: '2024-08-06', firstname: "Saman", lastname: "Kumara", email: "saman@gmail.com", phone: "0775693344"},
  {date: '2024-08-06', firstname: "Amal", lastname: "Perera", email: "amal@email.com", phone: "0783324555"},
  {date: '2024-08-06', firstname: "Nimal", lastname: "Pathirana", email: "npathirana@email.com", phone: "0715543766"},
];

const VEHICLE_TABLE_DATA: vehicleVerification[] = [
  {date: '2024-08-06', vehicleNumber: "KU-5643", owner: "Saman Kumara", leasing: "No leasing"},
  {date: '2024-08-06', vehicleNumber: "ABB-3375", owner: "Nimal Perera", leasing: "Have leasing"},
  {date: '2024-08-06', vehicleNumber: "ACD-7788", owner: "Saman Kumara", leasing: "Have leasing"},
]


@Component({
  selector: 'app-verification-center',
  templateUrl: './verification-center.component.html',
  styleUrls: ['./verification-center.component.sass']
})
export class VerificationCenterComponent implements OnInit {
  displayedColumns: string[] = ['date', 'firstname', 'lastname', 'email', 'phone', 'action'];
  displayedColumnsVehicles: string[] = ['date', 'vehicleNumber', 'owner', 'leasing', 'action'];
  dataSource = USER_TABLE_DATA;
  dataSourceVehicle = VEHICLE_TABLE_DATA;

  constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthService) {
  }

  ngOnInit() {

  }

  viewVerificationDetails() {
    this.dialog.open(UserVerificationDetailsComponent).afterClosed().subscribe(_ => {
      this.ngOnInit()
    })
  }viewVehicleVerificationDetails() {
    this.dialog.open(VehicleVerificationDetailsComponent).afterClosed().subscribe(_ => {
      this.ngOnInit()
    })
  }
}
