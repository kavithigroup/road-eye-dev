import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddStationComponent} from "./add-station/add-station.component";

@Component({
  selector: 'app-police-stations',
  templateUrl: './police-stations.component.html',
  styleUrls: ['./police-stations.component.sass']
})
export class PoliceStationsComponent implements OnInit {
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  addStation(){
    this.dialog.open(AddStationComponent)
  }
}
