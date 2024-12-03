import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';




export interface Request {
  
  Date: string;
  Time: string;
  Location: string;



}
const REQUEST_DATA: Request[] = [
  { Date: '2024-08-27', Time: '16:32',Location: "avissawella" },
  { Date: '2024-07-30', Time: '15:54',Location: "homagama" },
  { Date: '2024-07-16', Time: '15:20',Location: "maharagama" },
  { Date: '2024-07-14', Time: '14:30',Location: "nugegoda" },

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











