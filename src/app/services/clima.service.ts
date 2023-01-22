import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  baseURL = 'https://api.openweathermap.org/data/2.5/weather';


  constructor(private http: HttpClient) {}

  getClima(ciudad: string, lat: number | null, lon: number | null ) {
    // const headers = new HttpHeaders().set(
    //   'Authorization', 'eab3048790c91cc1cdf81f54a832942d'
    // );
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   this.latitude = pos.coords.latitude;
    //   this.longitude = pos.coords.longitude;
    //   console.log('Coordenadas' + this.latitude + this.longitude);
    //   this.codernadas = this.latitude;
    //   console.log(this.codernadas);
    // });

    const params = new HttpParams()
      .set('q', ciudad)  // para ciudad directamente
      // .set('lat', lat)
      // .set('lon', lon)
      .set('appid', 'eab3048790c91cc1cdf81f54a832942d')
      .set('units', 'metric');

    let options = {
      // headers : headers;
      params: params,
    };
    console.log('test' + options.params);
    return this.http.get(`${this.baseURL}`, options);
  }
}
