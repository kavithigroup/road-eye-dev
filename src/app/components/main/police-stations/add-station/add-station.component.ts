import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.sass']
})
export class AddStationComponent {
  form=new FormGroup({
    stationName: new FormControl(),
    district: new FormControl(),
    address: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    owner: new FormControl(),
    absolute_owner: new FormControl()
  })
}
