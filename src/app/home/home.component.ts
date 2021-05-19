import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {PlanetModel} from '../../models/planet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  finalPlanetResult: PlanetModel[] = [];

  constructor(private apiService: ApiService) {
  }


  /**
   * @description function return all planets that have at least 2 films and at least one resident has reptiles
   * @param page page number
   */
  getPlanetData(page): void {
    this.apiService.getPlanets(page).then((res: any) => {
      if (res.results) {
        const planetsResult: PlanetModel[] = res.results.filter(planet =>
          (planet.films.length >= 2 && planet.residents.length >= 1));
        planetsResult.forEach(planet => {
          planet.residents.forEach(url => {
            this.apiService.getResidentDetails(url).then(details => {
              if (details.species.length > 0) {
                const index = this.finalPlanetResult.indexOf(planet);
                if (index === -1) {
                  this.finalPlanetResult.push(planet);
                }
              }
            });
          });
        });
        if (res.next) {
          this.getPlanetData(page + 1);
        }
      }

    });
  }


  ngOnInit(): void {
    this.getPlanetData(1);
  }

}
