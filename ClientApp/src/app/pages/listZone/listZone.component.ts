import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/models/zone/zone.model';
import { ZoneService } from 'src/app/services/ZoneService/Zone.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-listZone',
  templateUrl: './listZone.component.html',
  styleUrls: ['./listZone.component.scss']
})
export class ListZoneComponent implements OnInit {

  zones: Zone[];

  nearbyZones: Zone[] = [];


  latitude: string;
longitude: string;
radius: string;

  constructor(private zoneService: ZoneService, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.getAllZones();
    this.findZonesNearby('45.5017', '-73.5673', '10000');
  }

  getAllZones() {
    this.zoneService.getAllZones().subscribe(zones => {
      this.zones = zones;
    });
  }

  findZonesNearby(latitude: string, longitude: string, radius: string) {
    this.zoneService.findZonesNearby(latitude, longitude, radius).subscribe(zones => {
      this.zones = [...this.zones, ...zones]; // Merge with existing zones
    });
  }

  onDelete(zoneId: string) {
    this.zoneService.deleteZone(zoneId).subscribe(() => {
      this.getAllZones();  // refresh the list
    });
  }

  onEdit(zoneId: string) {
    this.router.navigate(['/editZone', zoneId]); // Navigate to the edit component
  }
}
