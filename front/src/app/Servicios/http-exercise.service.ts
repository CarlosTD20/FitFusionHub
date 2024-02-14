import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ExerciseDetail } from '../Models/exercise';
import { Data, Listado } from '../Models/listado';

@Injectable({
  providedIn: 'root'
})
export class HttpExerciseService {

  url = 'http://localhost:8080/exercises'
  // url = 'http://localhost:8080/exercises?page=2&pageSize=5'

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Listado> {
    return this.http.get<Listado>(this.url)
      .pipe(retry(1))
  }

  getById(id: number): Observable<Data> {
    return this.http.get<Data>(this.url + `/${id}`)
      .pipe(retry(1))
  }

  post(exercise: ExerciseDetail): Observable<ExerciseDetail> {
    return this.http.post<ExerciseDetail>(this.url,exercise)
      .pipe(retry(1))
  }
}
