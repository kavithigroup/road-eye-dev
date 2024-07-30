import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductComponent} from "./add-product/add-product.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  addProduct(){
    this.dialog.open(AddProductComponent)
  }
}
