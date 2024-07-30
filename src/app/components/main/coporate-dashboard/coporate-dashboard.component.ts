import { Component } from '@angular/core';


import {Complaint} from "../complain/complain.component";

import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import {Location} from "../locationrequests/locationrequests.component";

const REQUEST_DATA: Location[] = [
  { id: 1, vehicleNumber: 'KS1235', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Verified', type: 'Car', date:'2024-07-15'  },
  { id: 2, vehicleNumber: 'AB1225', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Not Verified', type: 'Van' , date:'2024-07-15' },
  { id: 3, vehicleNumber: 'GH1115', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Not Verified', type: 'Cab', date:'2024-07-15'  },
  { id: 4, vehicleNumber: 'JK1005', brand: 'Toyota', model: 'Aqua', color: 'black', status: 'Verified', type: 'Car' , date:'2024-07-15' },

];

@Component({
  selector: 'app-coporate-dashboard',
  templateUrl: './coporate-dashboard.component.html',
  styleUrls: ['./coporate-dashboard.component.sass']
})
export class CoporateDashboardComponent {

  displayedColumns: string[] = ['id', 'vehicleNumber','brand', 'model','type','color', 'status', 'action'];
  dataSource = REQUEST_DATA;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Holiday', date: '2024-07-10' },
      { title: 'Holiday', date: '2024-07-05' }
    ]
  };

  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr);
  }

}
