import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';



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



