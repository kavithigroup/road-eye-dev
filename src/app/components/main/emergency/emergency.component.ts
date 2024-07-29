import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddServiceComponent} from "./add-service/add-service.component";
import {AddFamilyComponent} from "./add-family/add-family.component";

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.sass']
})
export class EmergencyComponent {

  constructor(private dialog: MatDialog) {
  }

  addMSP() {
this.dialog.open(AddServiceComponent, {})
  }

  addFamilycontact() {
    this.dialog.open(AddFamilyComponent, {})
  }
}
