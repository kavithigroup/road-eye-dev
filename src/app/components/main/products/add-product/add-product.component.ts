import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {
  form=new FormGroup({
    productName: new FormControl(),
    productBrand: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  })
}
