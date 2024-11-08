import {Component, NgModule, OnInit} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";

export interface Complaint  {
  id: number;
  complaintTime: string;
  complaintDate: string;
  complaintSubject: string;
  status: string;
}

export interface ComplaintItem  {
  complain_id: number;
  send_time: string;
  police_station: string;
  subject: string;
  status: string;
  address: string;
  complain:string;
  contact:string;
  district:string;
  email:string;
  name:string;
  nic:string;
  proof:string;
  type:string;
  user:number
}

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.sass'],

})

export class ComplainComponent implements OnInit{


  displayedColumns: string[] = ['complain_id', 'send_time', 'police_station', 'subject', 'status', 'action'];
  dataSource: ComplaintItem[] = [];


  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {

    this.fetchComplaints();
  }

  fetchComplaints() {
    const userId = this.auth.user?.user_id;
    if (userId) {
      this.api.post("/complain/user", { user: userId }).subscribe(
        (httpResponse: any) => {
          // console.log("Full Response: ", httpResponse);
          if (httpResponse.body) {
            this.dataSource = httpResponse.body
            // console.log("Data Source: ", this.dataSource);
          } else {
            console.warn("Unexpected response structure or empty data.");
          }
        },
        (error) => {
          console.error("Error fetching complaints: ", error);
        }
      );
    }
  }
}
