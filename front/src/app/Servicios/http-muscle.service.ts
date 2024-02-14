import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Data, Listado } from '../Models/listado';

@Injectable({
  providedIn: 'root'
})
export class HttpMuscleService {

  url = 'http://localhost:8080/muscles'

  constructor(
    private http: HttpClient
  ) { }

  getMuscles(): Observable<Listado> {
    return this.http.get<Listado>(this.url)
      .pipe(retry(1))
  }

  getById(id: number): Observable<Data> {
    return this.http.get<Data>(this.url + `/${id}`)
      .pipe(retry(1))
  }
}
