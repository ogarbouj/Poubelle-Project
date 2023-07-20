import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from 'src/app/models/zone/zone.model';
import { ZoneService } from 'src/app/services/ZoneService/Zone.service';
@Component({
  selector: 'app-editZone',
  templateUrl: './editZone.component.html',
  styleUrls: ['./editZone.component.scss']
})
export class EditZoneComponent implements OnInit {
  zone: Zone;

  constructor(
    private activatedRoute: ActivatedRoute,
    private zoneService: ZoneService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getZone();
  }

  getZone() {
    const id = this.activatedRoute.snapshot.params.id;
    this.zoneService.getZone(id).subscribe(zone => {
      this.zone = zone;
    });
  }

  onUpdate() {
    this.zoneService.updateZone(this.zone._id, this.zone).subscribe(() => {
      this.router.navigate(['/listeZone']);  // redirect to the zone list
    });
  }
}
