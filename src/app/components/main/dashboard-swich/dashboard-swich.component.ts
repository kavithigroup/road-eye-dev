import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-dashboard-swich',
  templateUrl: './dashboard-swich.component.html',
  styleUrls: ['./dashboard-swich.component.sass']
})
export class DashboardSwichComponent implements OnInit {

  role: number = 0

  constructor(protected auth: AuthService) {
  }

  ngOnInit(): void {
    this.role = this.auth.user?.role || 0
  }
}
