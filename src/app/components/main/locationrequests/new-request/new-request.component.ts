import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ApiService } from "../../../../services/api.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.sass']
})
export class NewRequestComponent {
  form = new FormGroup({
    vehicle_number: new FormControl(),
    brand: new FormControl(),
    model: new FormControl(),
    yom: new FormControl(),
    type: new FormControl(),
    millage: new FormControl(),
    color: new FormControl(),
    owner: new FormControl(),
    absolute_owner: new FormControl(),
  });

  error?: string;

  constructor(private api: ApiService, private router: Router, private auth: AuthService) {}

  submit() {
    if (this.form.invalid) {
      this.error = "Please fill out all required fields correctly.";
      return;
    }
    const data = { ...this.form.value, user: this.auth.user?.user_id };
    this.api.post("/vehicle/add/", data).subscribe(
      response => {
        if (response.body === "ok") {
          this.router.navigate(['/locationrequests']); // Redirect after successful submission
        } else {
          this.error = response.body; // Display error message if submission fails
        }
      },
      error => {
        this.error = "An error occurred during submission.";
      }
    );
  }

  setOwner() {
    const user = this.auth.user;
    if (user) {
      this.form.controls.owner.setValue(`${user.first_name} ${user.last_name}`);
    }
  }
}
