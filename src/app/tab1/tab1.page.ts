import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  /* public apiKey = environment.ApikeyGoogleMaps; */
  public apiKey = 'environment.ApikeyGoogleMaps';
  userLocation = {
    lat: 21.161908,
    lng: -86.8515279,
  }
  constructor() {
    
  }
  async ngOnInit() {
    let mapRef = document.getElementById('map');
    let newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef!, // reference to the capacitor-google-map element
      apiKey: this.apiKey, // Your Google Maps API Key
      config: {
        center: this.userLocation,
        zoom: 12, // The initial zoom level to be rendered by the map
      },
    });
    const coordinates = await Geolocation.getCurrentPosition();
    this.userLocation = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    }
    console.log('Current position:', this.userLocation);
    newMap.enableTrafficLayer(true);
    // Add a marker to the map
    const markersId = await newMap.addMarkers(
      [
        {
          title: "Parada 1",
          coordinate: {
            lat: 21.161908,
            lng: -86.8515279,
          }
        },
        {
          title: "Parada 1",
          coordinate: {
            lat: 21.22,
            lng: -86.8515279,
          }
        },
        {
          title: "Parada 1",
          coordinate: {
            lat: 21.30,
            lng: -86.8515279,
          }
        },

      ]
    );
  }
  
}
