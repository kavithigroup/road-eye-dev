import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-stations',
  templateUrl: './police-stations.component.html',
  styleUrls: ['./police-stations.component.sass']
})
export class PoliceStationsComponent implements OnInit {
  stations: any[] = [];
  filteredStations: any[] = [];
  searchText: string = '';
  addStationForm: FormGroup;
  showAddForm: boolean = false; // Controls visibility of the form

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router // For navigation
  ) {
    // Initialize the form with the `police_user` field
    this.addStationForm = this.fb.group({
      district: ['', Validators.required],
      branch: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]], // Allow up to 15 digits
      address: ['', Validators.required],
      map_location: ['', Validators.required],
      police_user: [
        '',
        [Validators.required, Validators.email] // Validate email format
      ]
    });
  }

  ngOnInit(): void {
    this.fetchAllStations();
  }

  // Fetch all police stations from the backend
fetchAllStations(): void {
  this.api.get('/stations/details/').subscribe(
    (response: any) => {
      if (response && response.data) {
        // Validate and assign data
        this.stations = Array.isArray(response.data) ? response.data : [];
        this.filteredStations = [...this.stations];
        console.log('Fetched stations:', this.stations);
      } else {
        console.error('Unexpected response structure:', response);
        this.stations = [];
        this.filteredStations = [];
      }
    },
    (error) => {
      console.error('Failed to fetch stations:', error);
      this.stations = [];
      this.filteredStations = [];
    }
  );
}


  // Filter stations based on the search input
  filterStations(): void {
    this.filteredStations = this.stations.filter((station) =>
      station.district.toLowerCase().includes(this.searchText.toLowerCase()) ||
      station.branch.toLowerCase().includes(this.searchText.toLowerCase()) ||
      station.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Clear the search input and reset the station list
  clearSearch(): void {
    this.searchText = '';
    this.filteredStations = [...this.stations];
  }

  // Toggle the visibility of the add station form
  toggleAddStationForm(): void {
    this.showAddForm = !this.showAddForm; // Toggle form visibility
  }

  // Submit the form to create a new police station
  submitNewStation(): void {
    if (this.addStationForm.valid) {
      const sanitizedData = { ...this.addStationForm.value, status: 'unverified' }; // Backend expects status

      // Make API call to create the station
      this.api.post('/stations/create', sanitizedData).subscribe(
        (response: any) => {
          console.log('Station created successfully:', response);
          this.fetchAllStations(); // Refresh the station list
          this.showAddForm = false; // Hide the form
          this.addStationForm.reset(); // Reset the form
        },
        (error) => {
          console.error('Failed to create station:', error);
        }
      );
    } else {
      console.warn('Form is invalid. Please fill out all required fields.');
    }
  }

  // Delete a station by ID
  deleteStation(stationId: number): void {
    if (confirm('Are you sure you want to delete this station?')) {
      this.api.delete(`/stations/delete/${stationId}`).subscribe(
        (response: any) => {
          console.log('Station deleted successfully:', response);
          this.fetchAllStations(); // Refresh the station list
        },
        (error) => {
          console.error('Failed to delete station:', error);
        }
      );
    }
  }

  // Navigate to the police station details page
  viewStationDetails(station: any): void {
    this.router.navigate(['police-stations/station'], { state: { station } });
  }
}
