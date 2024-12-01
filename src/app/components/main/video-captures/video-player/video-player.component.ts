import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit {
  video: string = '';
  vehicleNumber: string = '';
  captureTime: string = '';
  captureDate: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the video details from query parameters
    this.route.queryParams.subscribe(params => {
      this.video = params['video'];
      this.vehicleNumber = params['vehicle_number'];
      this.captureTime = params['capture_time'];
      this.captureDate = params['capture_date'];
    });
  }
}
