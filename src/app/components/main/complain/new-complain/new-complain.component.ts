import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ApiService } from "../../../../services/api.service";
import { AuthService } from "../../../../services/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.sass']
})
export class NewComplainComponent {

  form = new FormGroup({
    district: new FormControl(),
    police_station: new FormControl(),
    type: new FormControl(),
    subject: new FormControl(),
    contact: new FormControl(),
    complain: new FormControl(),
    proof: new FormControl(),
    name: new FormControl(),
    nic: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
  });

  error?: string;
  videos: any[] = []; // Declare the videos property

  constructor(
    private api: ApiService,
    protected auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router // Inject the Router service
  ) { }

  districts: string[] = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale',
    'Nuwara Eliya', 'Galle', 'Hambantota', 'Matara',
    'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya',
    'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa',
    'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle',
    'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya',
    'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee'
  ];

  policeStations: string[] = [
    'Agalawatta', 'Ahangama', 'Akkaraipattu', 'Alawwa', 'Ambalangoda',
    //... (Add the rest of the list here)
  ];

  ngOnInit() {
    this.api.post("/video-capture/user", { user: this.auth.user?.user_id }).subscribe(httpResponse => {
      this.videos = httpResponse.body;
    });
  }

  submit() {
    if (this.form.invalid) return;

    let d: any = this.form.value;
    d["user"] = this.auth.user?.user_id;
    d["contact"] = this.auth.user?.phone;
    d["nic"] = this.auth.user?.nic;
    d["email"] = this.auth.user?.email;
    d["name"] = this.auth.user?.first_name;

    console.log(d);

    this.api.post("/complain/create/", d).subscribe(httpResponse => {
      this.error = httpResponse.body;
      if (this.error === "ok") {
        this.snackBar.open('Complaint submitted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });

        // Redirect to the Complaint component
        this.router.navigate(['/complaints']);
      }
    });
  }
}
