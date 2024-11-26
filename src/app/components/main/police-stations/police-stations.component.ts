import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddStationComponent } from "./add-station/add-station.component";

@Component({
  selector: 'app-police-stations',
  templateUrl: './police-stations.component.html',
  styleUrls: ['./police-stations.component.sass']
})
export class PoliceStationsComponent implements OnInit {
  searchText: string = ''; // For search input
  stations = [
    {
      name: 'Colombo District | Kolpitty Branch',
      contact: '0111234567',
      address: 'WR7X+JJV, Galle Rd, Colombo 00300',
      verified: true
    },
    {
      name: 'Colombo District | Dehiwala Branch',
      contact: '0111234789',
      address: 'Hill St, Dehiwala-Mount Lavinia',
      verified: false
    }
    // Add more station objects here
  ];
  filteredStations = [...this.stations]; // Filtered results

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.filterStations(); // Initialize filtered stations
  }

  addStation() {
    this.dialog.open(AddStationComponent);
  }

  filterStations() {
    const lowerSearch = this.searchText.toLowerCase();
    this.filteredStations = this.stations.filter(station =>
      station.name.toLowerCase().includes(lowerSearch) ||
      station.address.toLowerCase().includes(lowerSearch) ||
      station.contact.includes(lowerSearch)
    );
  }

  clearSearch() {
    this.searchText = ''; // Clear search text
    this.filterStations(); // Reset filtered stations
  }
}
