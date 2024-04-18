import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Layout/Header"
import DetailExercise from "./Components/ExercisesCompoenents/ExerciseDetailComponent"
import ListExercises from "./Components/ExercisesCompoenents/ExerciseListComponent"
import UpdateExercise from "./Components/ExercisesCompoenents/ExerciseUpdateComponent"
import DeleteExercise from "./Components/ExercisesCompoenents/ExerciseDeleteComponent"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="bg-gray-200 h-screen p-0 m-0">
          <Routes>
            <Route path='/' />
            <Route path='/exercises' element={<ListExercises />} />
            <Route path='/exercises/:id' element={<DetailExercise />}/>
            <Route path='/exercises/update/:id' element={<UpdateExercise />}/>
            <Route path='/exercises/delete/:id' element={<DeleteExercise />}/>
            <Route path='/muscles' />
            <Route path='/' />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}