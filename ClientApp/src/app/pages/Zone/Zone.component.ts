import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/models/zone/zone.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ZoneService } from 'src/app/services/ZoneService/Zone.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-Zone',
  templateUrl: './Zone.component.html',
  styleUrls: ['./Zone.component.scss']
})
export class ZoneComponent implements OnInit {
  zoneForm: FormGroup;
  constructor(private zoneService: ZoneService, private router :Router) { }

  ngOnInit() {
    this.zoneForm = new FormGroup({
      'nom': new FormControl(null, Validators.required),
      'latitude': new FormControl(null, Validators.required),
      'longitude': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.zoneForm.valid) {
      const { nom, latitude, longitude } = this.zoneForm.value;
      const newZone = new Zone(nom, latitude, longitude);
      this.zoneService.createZone(newZone).subscribe(
        response => console.log(response),
       
        error => console.error(error)
      );
      this.router.navigate(['/listeZone']);
    }
  }
}
