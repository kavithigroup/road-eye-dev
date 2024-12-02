import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-new-request',
  templateUrl: './police-new-request.component.html',
  styleUrls: ['./police-new-request.component.sass']
})
export class PoliceNewRequestComponent {
  types: string[] = ['Car', 'Motorcycle', 'Three-Wheeler', 'Van', 'Bus', 'Lorry', 'Other'];
  colors: string[] = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Silver', 'Grey', 'Brown', 'Orange'];
  districts: string[] = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale',
    'Nuwara Eliya', 'Galle', 'Hambantota', 'Matara',
    'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya',
    'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa',
    'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle'
  ];

  requestData: any = {
    incident_date: '',
    incident_time: '',
    district: '',
    location: '',
    reason: '',
    vehicle_id: '',
    type: '',
    color: ''
  };

  constructor(private api: ApiService, private snackBar: MatSnackBar, private router: Router) {}

  submitRequest(): void {
    const policeId = 1;

    if (!this.requestData.incident_date || !this.requestData.incident_time || !this.requestData.district ||
        !this.requestData.reason || !this.requestData.vehicle_id || !this.requestData.type) {
      this.snackBar.open('Please fill all required fields', 'Close', { duration: 3000 });
      return;
    }

   
    this.api.post(`/police-requests/create?police_id=${policeId}`, this.requestData).subscribe(
      () => {
        this.snackBar.open('Police request submitted successfully', 'Close', { duration: 3000 });
        this.router.navigate(['/police-requests']); 
      },
      (error) => {
        this.snackBar.open('Failed to submit request: ' + error.message, 'Close', { duration: 3000 });
      }
    );
  }
}
