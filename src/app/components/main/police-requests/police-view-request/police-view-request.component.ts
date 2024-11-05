import { Component } from '@angular/core';

@Component({
  selector: 'app-police-view-request',
  templateUrl: './police-view-request.component.html',
  styleUrls: ['./police-view-request.component.sass']
})
export class PoliceViewRequestComponent {


  request?: {
    id: number
    type: string
    color: string
    vehicle_no: string
    subject: string
    reason: string
    status: string
    registration: string

   
  }
    
    
}
