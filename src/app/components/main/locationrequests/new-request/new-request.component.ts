import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.sass']
})
export class NewRequestComponent {
  form=new FormGroup({
    type: new FormControl(),
    number: new FormControl(),
    brand: new FormControl(),
    model: new FormControl(),
    color: new FormControl(),
  })
}
