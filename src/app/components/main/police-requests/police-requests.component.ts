import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";



export interface Request {
  id: number;
  RequestTime: string;
  RequestDate: string;
  VehicleId: string;
  Registration: string;
  status: string;

}

const REQUEST_DATA: Request[] = [
  { id: 1, RequestTime: '14:30', RequestDate: '2024-07-27', VehicleId: 'ABC123', Registration: 'Registed', status: 'Investigating' },
  { id: 2, RequestTime: '15:00', RequestDate: '2024-07-27', VehicleId: 'DAC452', Registration: 'Unregisted', status: 'Complete' },
  { id: 3, RequestTime: '16:15', RequestDate: '2024-07-27', VehicleId: 'AEQ243', Registration: 'Registed', status: 'Complete' }
];


@Component({
  selector: 'app-police-requests',
  templateUrl: './police-requests.component.html',
  styleUrls: ['./police-requests.component.sass']
})
export class PoliceRequestsComponent {

  displayedColumns: string[] = ['id', 'requestTime', 'requestDate', 'vehicleId', 'registration', 'status', 'action'];
  dataSource = REQUEST_DATA;

}

























// construcctor(private api: ApiService, private router: Router, private auth: AuthService) {

// constructor(private api: ApiService, private router: Router, private auth: AuthService) {
// }

// submit() {
//   this.api.post("/login", this.form.value).subscribe(httpResponse => {
//     this.error = httpResponse.body
//     if (this.error === "ok") {
//       this.error = undefined
//       setTimeout(() => {
//         this.auth.updatesSession()
//         this.router.navigateByUrl("/dashboard").then()
//       }, 500)
//     }
//   })
// }


