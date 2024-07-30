import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.sass']
})
export class UpdateProductComponent {

  form=new FormGroup({
    productName: new FormControl('Engine Oil Filter'),
    productBrand: new FormControl('Bosch'),
    price: new FormControl('$10'),
    quantity: new FormControl('15')
  })

}
