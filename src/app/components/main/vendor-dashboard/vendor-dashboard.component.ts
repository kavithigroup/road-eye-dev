import { Component } from '@angular/core';

import {Complaint} from "../complain/complain.component";

import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import {Location} from "../locationrequests/locationrequests.component";

export interface Order {
  id: number;
  product: string;
  quantity: number;
  price: number;
  date:string;
  vendor: string;
  status: string;
}
const ORDER_DATA: Order[] = [
  { id: 1, product: 'Tire', quantity: 4, price: 10000.00, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 2, product: 'Tire', quantity: 4, price: 10000.00, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 3, product: 'Tire', quantity: 4, price: 10000.00, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 4, product: 'Tire', quantity: 4, price: 10000.00, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 5, product: 'Tire', quantity: 4, price: 10000.00, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },

];
@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.sass']
})
export class VendorDashboardComponent {

  displayedColumns: string[] = ['id', 'product', 'quantity', 'status', 'date','vendor','price', 'action'];
  dataSource = ORDER_DATA;

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
