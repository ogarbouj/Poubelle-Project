import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
/*
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = 20.41;
  constructor() { }
  ngOnInit() {
    let token = environment.mapbox.accessToken;
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(token);

      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 9,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
  */

}
