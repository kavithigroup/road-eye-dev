import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-video-captures',
  templateUrl: './video-captures.component.html',
  styleUrls: ['./video-captures.component.sass']
})
export class VideoCapturesComponent implements OnInit{

  video_capture: {
    vehicle_number:string
    reg_time: string
    video:string

  }[] = []

  constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthService) {
  }

  dataSource: any[] = []; // Initialize dataSource
  displayedColumns = ['id', 'title', 'captureTime', 'captureDate', 'vehicleNumber', 'action'];
  gridView = true

  ngOnInit(){
    this.api.post("/video-capture/user", {user: this.auth.user?.user_id}).subscribe(httpResponse => {
      this.video_capture = httpResponse.body.reverse()
      console.log(this.video_capture)
      this.dataSource = this.video_capture.map((item, index) => ({
        id: index + 1,
        title: item.video,
        captureTime: item.reg_time.split('T')[1],
        captureDate: item.reg_time.split('T')[0],
        vehicleNumber: item.vehicle_number,
        video: item.video
      }));
    })

  }




}
