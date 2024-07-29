import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.sass']
})
export class SearchRequestComponent {

  form=new FormGroup({
    number: new FormControl(),
  })

}
