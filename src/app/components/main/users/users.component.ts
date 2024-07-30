import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  contact: string;
  email: string;
  type: string
}
const USER_DATA: User[] = [
  { id: 1, name: 'Jayath Perera', contact: '0701245789', email: 'jayath@gmail.com', type: 'Vehicle Owner'},
  { id: 2, name: 'Kavin Bhanuka', contact: '0781278789', email: 'kavin@gmail.com', type: 'Vehicle Owner'},
  { id: 3, name: 'Ravishan Bandara', contact: '0777896124', email: 'ravish@gmail.com', type: 'Maintenance'},
  { id: 4, name: 'Minuwangoda Station', contact: '0371245789', email: 'police.min@gmail.com', type: 'Police'},
  { id: 5, name: 'AutoSoutions', contact: '0111245789', email: 'autoSolutions@gmail.com', type: 'Maintenance'},
  { id: 6, name: 'Winey Parts', contact: '0771247789', email: 'jayath@gmail.com', type: 'Spare Part Supplier'},

];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {

  displayedColumns: string[] = ['id', 'name', 'contact', 'type', 'email', 'action'];
  dataSource = USER_DATA;


}
