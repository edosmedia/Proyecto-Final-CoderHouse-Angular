import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}

  getClima(ciudad: string) {
    // const headers = new HttpHeaders().set(
    //   'Authorization', 'eab3048790c91cc1cdf81f54a832942d'
    // );
    const params = new HttpParams()
      .set('q', ciudad)
      .set('appid', 'eab3048790c91cc1cdf81f54a832942d')
      .set('units', 'metric')

    let options = {
      // headers : headers;
      params: params
    }


    return this.http.get(`${this.baseURL}`, options);
  }
}
