import { Component } from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-new-plan',
  templateUrl: './add-new-plan.component.html',
  styleUrls: ['./add-new-plan.component.sass']
})
export class AddNewPlanComponent {


  form=new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    token: new FormControl(),
    yom: new FormControl(),
    millage: new FormControl(),
    color: new FormControl(),
    owner: new FormControl(),
    absolute_owner: new FormControl()
  })


}
