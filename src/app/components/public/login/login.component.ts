import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  showPassword = false
  error?: string
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private api: ApiService, private router: Router, private auth: AuthService) {
  }

  submit() {
    this.api.post("/login", this.form.value).subscribe(httpResponse => {
      this.error = httpResponse.body
      if (this.error === "ok") {
        this.error = undefined
        setTimeout(() => {
          this.auth.updatesSession()
          this.router.navigateByUrl("/dashboard").then()
        }, 500)
      }
    })
  }
}
