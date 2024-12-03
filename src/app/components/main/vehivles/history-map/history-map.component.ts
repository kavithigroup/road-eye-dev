import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {mapOptions, Marker} from "../../map/map.component";
import {GoogleMap} from "@angular/google-maps";

@Component({
  selector: 'app-history-map',
  templateUrl: './history-map.component.html',
  styleUrls: ['./history-map.component.sass']
})
export class HistoryMapComponent implements AfterViewInit {

  mapOptions = mapOptions
  points: google.maps.LatLngLiteral[] = [];

  polylineOptions: google.maps.PolylineOptions = {
    strokeColor: '#00F',  // Polyline color
    strokeOpacity: 1.0,      // Opacity
    strokeWeight: 2          // Weight (thickness)
  };
  @ViewChild("map") map!: GoogleMap
  protected vehicleDetails: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {

      const vehicleId = params["id"];


      this.api.get("/vehicle/location-history/" + params["id"]).subscribe(httpRepsonse => {
        this.points = httpRepsonse.map((u: any) => ({lat: u.lat, lng: u.lon}))
        this.map.panTo({
          lat: this.points.map(u => u.lat).reduce((sum: number, value: number) => sum + value, 0) / this.points.length,
          lng: this.points.map(u => u.lng).reduce((sum: number, value: number) => sum + value, 0) / this.points.length
        })

        // Second API call: Fetch vehicle details
        this.api.post("/vehicle/details", { id: vehicleId }).subscribe(vehicleResponse => {
          this.vehicleDetails = vehicleResponse.body; // Store vehicle details as needed
          console.log(this.vehicleDetails); // For debugging
        }, error => {
          console.error('Error fetching vehicle details:', error);
        });
      }, error => {
        console.error('Error fetching location history:', error);
      });
    })
  }
}
