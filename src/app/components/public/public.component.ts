import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass']
})
export class PublicComponent implements OnInit {
  loggedIn = document.cookie.indexOf("road-eye-user") !== -1

  ngOnInit() {
    setInterval(() => {
      this.loggedIn = document.cookie.indexOf("road-eye-user") !== -1
    }, 1000)
  }
}
