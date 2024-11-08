import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../../../services/auth.service";
import {ApiService} from "../../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.sass']
})
export class ViewComplaintComponent implements OnInit{

  complain?: {
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


  constructor(private auth: AuthService, private api: ApiService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.api.post("/complain/one", {id: params['id']}).subscribe(httpResponse => {

        this.complain = httpResponse.body[0]
        console.log(this.complain)
      })
    })

  }

  remove() {
    if (!confirm(`Cancel ${this.complain?.complain_id} from your complaints?`))
      return;
    this.api.post("/complain/cancel", {id: this.complain?.complain_id}).subscribe(httpResponse => {
      this.router.navigateByUrl("/complaints").then()
    })
  }
}
