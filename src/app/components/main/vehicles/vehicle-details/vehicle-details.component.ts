import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {AuthService} from "../../../../services/auth.service";
import {ApiService} from "../../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

export interface PeriodicElement {

  date: string;
  time: string;
  location: string;
  cordinates: string

}

const TABLE_DATA: PeriodicElement[] = [
  {date: '2024-07-27', time: "12.53", location: "Reid Avenue, Colombo", cordinates: "100 N 90 W"},
  {date: '2024-07-27', time: "12.53", location: "Reid Avenue, Colombo", cordinates: "100 N 90 W"},
  {date: '2024-07-27', time: "12.53", location: "Reid Avenue, Colombo", cordinates: "100 N 90 W"},

];

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.sass'],

})
export class VehicleDetailsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'location', 'cordinates'];
  dataSource = TABLE_DATA;
  vehicle?: {
    vehicle_id: number
    vehicle_number: string
    brand: string
    model: string
    millage: number
    yom: number
    owner: string
    color: string
    type: string
    absolute_owner: string
  }

  constructor(private auth: AuthService, private api: ApiService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.api.post("/vehicle/details", {id: params['id']}).subscribe(httpResponse => {
        this.vehicle = httpResponse.body
      })
    })

  }

  remove() {
    if (!confirm(`Remove ${this.vehicle?.vehicle_number} from your account?`))
      return;
    this.api.post("/vehicle/delete", {id: this.vehicle?.vehicle_id}).subscribe(httpResponse => {
      this.router.navigateByUrl("/vehicles").then()
    })
  }
}
