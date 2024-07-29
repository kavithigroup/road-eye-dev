import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.sass']
})
export class AddServiceComponent {

  form=new FormGroup({
    name: new FormControl(),
    priority: new FormControl()
  })

}
