import { Component } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {AddVehicleComponent} from "../vehicles/add-vehicle/add-vehicle.component";
import {AddNewPlanComponent} from "./add-new-plan/add-new-plan.component";

@Component({
  selector: 'app-all-subscriptions',
  templateUrl: './all-subscriptions.component.html',
  styleUrls: ['./all-subscriptions.component.sass']
})
export class AllSubscriptionsComponent {

  constructor(private dialog: MatDialog) {
  }

  addPlan() {
    this.dialog.open(AddNewPlanComponent)
  }
}
