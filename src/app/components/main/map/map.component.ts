import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {Router} from "@angular/router";

export interface Marker {
  label: string;
  position: google.maps.LatLngLiteral,
  raw: any
}

export const mapOptions: google.maps.MapOptions = {
  center: {
    lat: 7.6697,
    lng: 80.6459
  },
  zoom: 14,
  fullscreenControl: false,
  mapTypeId: "roadmap",
  styles: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e0e0e0"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#b3e5fc"
        }
      ]
    }
  ]
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements AfterViewInit {

  mapOptions = mapOptions

  markers: Marker[] = []

  @ViewChild("map") map!: GoogleMap

  constructor(private el: ElementRef, private api: ApiService, private router: Router) {

  }

  updateLive() {
    this.api.get("/vehicle/live").subscribe(httpResponse => {
      this.markers = httpResponse.map((u: any) => ({
        position: {
          lat: u.lat,
          lng: u.lon
        },
        label: u.vehicle_number,
        raw: u
      }))
      this.map.panTo({
        lat: this.markers.map(u => u.position.lat).reduce((sum: number, value: number) => sum + value, 0) / this.markers.length,
        lng: this.markers.map(u => u.position.lng).reduce((sum: number, value: number) => sum + value, 0) / this.markers.length
      })

    })

  }

  ngAfterViewInit() {
    // let overlay = new google.maps.OverlayView()
    // overlay.dr
    this.updateLive()
    setInterval(() => {
      this.updateLive()
    }, 5000)
    setInterval(() => {
      let p = {...this.markers[0].position}
      p.lat += Math.random() / 1000
      p.lng += Math.random() / 1000
      this.markers[0].position = p
    }, 1001000)
  }


  protected readonly alert = alert;

  markerClicked(marker: Marker) {
    this.router.navigateByUrl("/vehicles/map/" + marker.raw.vehicle_id).then()
  }
}
