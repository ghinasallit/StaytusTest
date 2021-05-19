import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {PlanetModel} from '../models/planet.model';
import {ResidentModel} from '../models/resident.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;
  value: number; // value for progress

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiURI;
  }

    getPlanets(page): Promise<PlanetModel[]> {
    return this.httpClient.get<PlanetModel[]>(this.baseUrl + `planets/?page=` + page)
      .pipe(map( res => res)).toPromise();
  }

    getResidentDetails(url): Promise<ResidentModel> {
    return this.httpClient.get<ResidentModel>(url)
      .pipe(map( res => res)).toPromise();
  }


}
