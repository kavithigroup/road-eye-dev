import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';




export interface Request {
  
  Date: string;
  Time: string;
  Location: string;



}
const REQUEST_DATA: Request[] = [
  { Date: '2024-07-27', Time: '14:30',Location: "colombo" },
  { Date: '2024-07-28', Time: '17:30',Location: "hnugegoda" },
  { Date: '2024-07-29', Time: '13:30',Location: "homagama" },
  { Date: '2024-07-230', Time: '19:30',Location: "avissawella" },

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











