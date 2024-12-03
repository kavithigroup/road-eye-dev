import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';




export interface Request {
  
  Date: string;
  Time: string;
  Location: string;



}
const REQUEST_DATA: Request[] = [
  { Date: '2024-07-27', Time: '14:30',Location: "maharagama" },
  { Date: '2024-07-28', Time: '14:50',Location: "homagama" },
  { Date: '2024-08-03', Time: '15:20',Location: "panagoda" },
  { Date: '2024-08-10', Time: '16:10',Location: "avissawella" },

];



@Component({
  selector: 'app-police-location-history',
  templateUrl: './police-location-history.component.html',
  styleUrls: ['./police-location-history.component.sass']
})
export class PoliceLocationHistoryComponent {
  
  
    displayedColumns: string[] = [ 'Date', 'Time', 'Location','Action'];
    dataSource = REQUEST_DATA;
}











