import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.sass']
})
export class AddVehicleComponent {
  form=new FormGroup({
    vehicleNumber: new FormControl(),
    brand: new FormControl(),
    model: new FormControl(),
    yom: new FormControl(),
    millage: new FormControl(),
    color: new FormControl(),
    owner: new FormControl(),
    absolute_owner: new FormControl()
  })
}
