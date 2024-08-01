import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {
  showPassword = false
  showConfirmPassword = false
  error?: string
  form = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl("", Validators.email),
    nic: new FormControl(),
    otp: new FormControl(),
    username: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  })
  paused = false
  otpSent = false
  done = false

  constructor(private api: ApiService, private router: Router) {
  }

  verifyEmail() {
    this.api.post("/otp", {email: this.form.value.email}).subscribe(httpResponse => {
      this.otpSent = true
    })
  }

  pause() {
    this.paused = true
    setTimeout(() => {
      this.paused = false
    }, 3000)
  }

  submit() {
    if (this.form.invalid)
      return;
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.error = "Passwords do not match"
      return;
    }
    this.pause()
    this.api.post("/register", this.form.value).subscribe(httpResponse => {
      this.error = httpResponse.body
      if (this.error == "ok") {
        this.done = true
        setTimeout(() => {
          this.router.navigateByUrl("/login").then()
        }, 5000)
      }
    })
  }
}
