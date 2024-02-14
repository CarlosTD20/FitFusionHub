import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Data } from '../Models/listado';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutineService {

  url = 'http://localhost:8080/routines'

  constructor(
    private http:HttpClient
  ) { }

  getRoutines(): Observable<Data> {
    return this.http.get<Data>(this.url)
      .pipe(retry(1))
  }

  getById(id: number): Observable<Data> {
    return this.http.get<Data>(this.url + `/${id}`)
      .pipe(retry(1))
  }
}
