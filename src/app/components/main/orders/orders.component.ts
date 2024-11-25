import { Component } from '@angular/core';

/**
 * Interface representing the structure of an order.
 */
export interface Order {
  id: number;           // Unique identifier for the order
  product: string;      // Name of the product in the order
  quantity: number;     // Quantity of the product ordered
  price: number;        // Price of the order
  date: string;         // Date when the order was placed
  vendor: string;       // Vendor who supplied the product
  status: string;       // Current status of the order (e.g., Pending)
}

/**
 * Mock data for demonstration purposes.
 * Represents a list of orders to populate the table.
 */
const ORDER_DATA: Order[] = [
  { id: 1, product: 'Tire', quantity: 4, price: 10000.0, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 2, product: 'Tire', quantity: 4, price: 10000.0, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 3, product: 'Tire', quantity: 4, price: 10000.0, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 4, product: 'Tire', quantity: 4, price: 10000.0, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
  { id: 5, product: 'Tire', quantity: 4, price: 10000.0, status: 'Pending', date: '2024-07-15', vendor: 'Peters Spare Parts' },
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass'],
})
export class OrdersComponent {
  /**
   * Column names to be displayed in the table.
   */
  displayedColumns: string[] = ['id', 'product', 'quantity', 'status', 'date', 'vendor', 'price', 'action'];

  /**
   * Data source for the table, containing the list of orders.
   */
  dataSource = ORDER_DATA;
}
