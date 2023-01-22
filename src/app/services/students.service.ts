import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseURL= 'https://63bdfb5ff5cfc0949b4fabf2.mockapi.io/estudiantes';

  constructor(private http: HttpClient) {}

 getStundents(): Observable<any> {
   return this.http.get('https://63bdfb5ff5cfc0949b4fabf2.mockapi.io/estudiantes')
 }
}
