import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.sass']
})
export class SearchRequestComponent implements OnInit {
  form = new FormGroup({
    number: new FormControl()
  });

  vehicles: { vehicle_number: string }[] = [];
  error?: string;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // Fetch vehicles for the logged-in user
    const userId = this.auth.user?.user_id;
    if (userId) {
      this.api.post('/vehicle/list', { user: userId }).subscribe({
        next: (response: any) => {
          this.vehicles = response.body;
        },
        error: () => {
          this.snackBar.open('Failed to fetch vehicles', 'Close', { duration: 5000 });
        }
      });
    }
  }

  submit() {
    if (this.form.invalid) {
      this.snackBar.open('Invalid Input: ', 'Close', { duration: 5000 });
      return;
    }

    const selectedVehicle = this.form.get('number')?.value;
    if (selectedVehicle) {
      this.snackBar.open(`Selected Vehicle: ${selectedVehicle}`, 'Close', { duration: 3000 });
    }
  }
}
