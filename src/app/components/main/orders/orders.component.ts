import { Component } from '@angular/core';


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
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent {

  displayedColumns: string[] = ['id', 'product', 'quantity', 'status', 'date','vendor','price', 'action'];
  dataSource = ORDER_DATA;


}


