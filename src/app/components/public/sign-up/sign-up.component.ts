import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    nic:new FormControl(),
    username: new FormControl(),
    contact: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  })
}
