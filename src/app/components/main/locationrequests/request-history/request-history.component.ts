import { Component } from '@angular/core';


export interface searchHistory {
  id: number;
  vehicleNumber: string;
  results:string;
  status: string,
  date: string,
  time:string,

}

const REQUEST_DATA: searchHistory[] = [
  { id: 1, vehicleNumber: 'KS1235', results:'Vehicle Found. Date & Time: 2024/07/15 at 12.05PM. Location:  Colombo 3. Image: Vehicle Image', status: 'Found', date:'2024-07-15',time:'12.25 PM'  },
  { id: 2, vehicleNumber: 'AB9235', results:'Vehicle Not Found. ', status: 'Not Found', date:'2024-07-15',time:'12.25 PM'  },
  { id: 3, vehicleNumber: 'BY8235', results:'Vehicle Not Found.', status: 'Not Found', date:'2024-07-15',time:'12.25 PM'  },
  { id: 4, vehicleNumber: 'KL6235', results:'Vehicle Not Found.', status: 'Not Found', date:'2024-07-15',time:'12.25 PM'  }

];

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.sass']
})

export class RequestHistoryComponent {
  displayedColumns: string[] = ['id', 'vehicleNumber','date','time','status', 'results'];
  dataSource = REQUEST_DATA;

}
