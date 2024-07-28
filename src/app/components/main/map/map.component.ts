import {AfterViewInit, Component, ElementRef} from '@angular/core';

export interface Marker {
  position: google.maps.LatLngLiteral
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements AfterViewInit {

  mapOptions: google.maps.MapOptions = {
    center: {
      lat: 7.6697,
      lng: 80.6459
    },
    zoom: 7,
    fullscreenControl: false
  }
  markers: Marker[] = [{
    position: {lat: 7.66, lng: 80.1}
  }]

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    setInterval(() => {
      let p = {...this.markers[0].position}
      p.lat += Math.random() / 1000
      p.lng += Math.random() / 1000
      this.markers[0].position = p
    }, 1000)
  }

  protected readonly alert = alert;
}
