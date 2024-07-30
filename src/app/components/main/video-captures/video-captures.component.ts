import { Component } from '@angular/core';
import {appointment} from "../appointments/appointments.component";
export interface videocapture {
  id: number;
  captureTime: string;
  captureDate: string;
  vehicleNumber: string;
  status: string;
}

const capture_DATA: videocapture[] = [
  { id: 1, captureTime: '14:30', captureDate: '2024-07-27', vehicleNumber: 'WP CAB 1234', status: 'Pending' },
  { id: 2, captureTime: '15:00', captureDate: '2024-07-27', vehicleNumber: 'SP LKR 5678', status: 'Uploaded' },
  { id: 3, captureTime: '16:15', captureDate: '2024-07-27', vehicleNumber: 'EP BCD 2345', status: 'Uploaded' }
];
@Component({
  selector: 'app-video-captures',
  templateUrl: './video-captures.component.html',
  styleUrls: ['./video-captures.component.sass']
})
export class VideoCapturesComponent {
  gridView = true
  displayedColumns: string[] = ['id', 'captureTime', 'captureDate', 'vehicleNumber', 'status', 'captureImage','action'];
  dataSource = capture_DATA;

}
