import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, AfterViewInit {
  role: number = 0

  constructor(private router: Router, protected auth: AuthService, private api: ApiService) {
  }

  logout() {
    this.api.post("/logout").subscribe(httpResponse => {
      setTimeout(() => {
        this.router.navigateByUrl("/login").then()
      })
    })
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() =>{
      this.auth.updatesSession()
      this.role = this.auth.user?.role || 0
      // alert(this.role)
    }, 100)

  }
}
