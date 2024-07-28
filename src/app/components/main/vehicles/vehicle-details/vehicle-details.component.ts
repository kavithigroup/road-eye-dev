import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {

  date: string;
  time: string;
  location: string;
  cordinates: string

}

const TABLE_DATA: PeriodicElement[] = [
  {date: '2024-07-27', time: "12.53", location: "Reid Avenue, Colombo", cordinates:"100 N 90 W"},
  {date: '2024-07-27', time: "12.53", location: "Reid Avenue, Colombo", cordinates:"100 N 90 W"},
  {date: '2024-07-27', time: "12.53", location: "Reid Avenue, Colombo", cordinates:"100 N 90 W"},

];
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.sass'],

})
export class VehicleDetailsComponent {
  displayedColumns: string[] = ['date', 'time', 'location', 'cordinates'];
  dataSource = TABLE_DATA;

}
