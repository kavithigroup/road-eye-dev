import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.sass']
})

//New appointment form controls
export class NewAppointmentComponent {
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
