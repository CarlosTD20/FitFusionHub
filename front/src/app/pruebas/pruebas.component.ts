import { Component } from '@angular/core';
import { HttpExerciseService } from '../Servicios/http-exercise.service';
import { ExerciseDetail, ExerciseList } from '../Models/exercise';
import { Listado } from '../Models/listado';
import { HttpMuscleService } from '../Servicios/http-muscle.service';
import { MuscleDetail } from '../Models/muscle';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  constructor(
    private httpExercise: HttpExerciseService,
    private httpMuscle: HttpMuscleService
  ) { }

  exercises: ExerciseList[] = []
  exercisesByMuscle: ExerciseList[] = [] 
  listado!: Listado
  muscle!:MuscleDetail
  detailExercise!: ExerciseDetail 

  ngOnInit() {
    this.httpExercise.get()
      .subscribe(lista => {
        this.listado = lista,
          this.exercises = this.listado.data
      })

    this.httpExercise.getById(1).subscribe(response => {
      // this.detailExercise.id = response.id,
      // this.detailExercise.name = response.name
      // this.detailExercise.description = response.description
      this.detailExercise=response.data
      console.log(this.detailExercise)
      this.httpMuscle.getById(this.detailExercise.id).subscribe(response =>  {
        this.muscle=response.data
      })
      // console.log(this.detailExercise)
    });
    // this.detailExercise=this.data
  }
  // console.log(this.exercises)
}

