import { Component } from '@angular/core';
import {Complaint} from "../complain/complain.component";

export interface Location {
  id: number;
  vehicleNumber: string;
  model: string,
  brand : string,
  type: string,
  color: string,
  status: string,
  date: string,
}

const REQUEST_DATA: Location[] = [
  { id: 1, vehicleNumber: 'KS1235', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Verified', type: 'Car', date:'2024-07-15'  },
  { id: 2, vehicleNumber: 'AB1225', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Not Verified', type: 'Van' , date:'2024-07-15' },
  { id: 3, vehicleNumber: 'GH1115', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Not Verified', type: 'Cab', date:'2024-07-15'  },
  { id: 4, vehicleNumber: 'JK1005', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Verified', type: 'Car' , date:'2024-07-15' },

];
@Component({
  selector: 'app-locationrequests',
  templateUrl: './locationrequests.component.html',
  styleUrls: ['./locationrequests.component.sass']
})
export class LocationrequestsComponent {

  displayedColumns: string[] = ['id', 'vehicleNumber','brand', 'model','type','color', 'status', 'action'];
  dataSource = REQUEST_DATA;

}
