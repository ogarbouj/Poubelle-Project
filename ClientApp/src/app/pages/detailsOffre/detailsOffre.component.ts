import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppleOffre, Offre } from 'src/app/models/appelOffre';
import { OffreServiceService } from 'src/app/services/offreService.service';


@Component({
  selector: 'app-detailsOffre',
  templateUrl: './detailsOffre.component.html',
  styleUrls: ['./detailsOffre.component.scss']
})
export class DetailsOffreComponent implements OnInit {
  offer: Offre;
  description: any;

  constructor(private route: ActivatedRoute, private offreService: OffreServiceService,private ngZone: NgZone) { }

  ngOnInit() {
    this.getoffer();
  }

  getoffer() {
    this.route.params.subscribe(params => {
      const offreId = params['id'];

      this.offreService.getOffreDetails(offreId).subscribe(
        res => {
          this.offer = res.appelOffre;

        },
        error => {
          console.error('Erreur lors de la récupération des détails de l\'offre', error);
        }
      );
    });
  }

}
