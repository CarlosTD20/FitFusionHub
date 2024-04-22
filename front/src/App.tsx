import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Layout/Header"
import DetailExercise from "./Components/ExercisesCompoenents/ExerciseDetailComponent"
import ListExercises from "./Components/ExercisesCompoenents/ExerciseListComponent"
import UpdateExercise from "./Components/ExercisesCompoenents/ExerciseUpdateComponent"
import DeleteExercise from "./Components/ExercisesCompoenents/ExerciseDeleteComponent"
import InsertExercise from "./Components/ExercisesCompoenents/ExerciseInsertComponent"
import MusclesDetail from "./Components/MusclesComponents/MusclesDetailComponent"
import MusclesInsert from "./Components/MusclesComponents/MusclesInsertComponent"
import MusclesUpdate from "./Components/MusclesComponents/MusclesUpdateComponent"
import MusclesDelete from "./Components/MusclesComponents/MusclesDeleteComponent"
import MusclesList from "./Components/MusclesComponents/MusclesListComponet"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' />
            <Route path='/exercises' element={<ListExercises />} />
            <Route path='/exercises/:id' element={<DetailExercise />} />
            <Route path='/exercises/insert' element={<InsertExercise />} />
            <Route path='/exercises/update/:id' element={<UpdateExercise />} />
            <Route path='/exercises/delete/:id' element={<DeleteExercise />} />
            <Route path='/muscles' element={<MusclesList />} />
            <Route path='/muscles/:id' element={<MusclesDetail />} />
            <Route path='/muscles/insert' element={<MusclesInsert />} />
            <Route path='/muscles/update/:id' element={<MusclesUpdate />} />
            <Route path='/muscles/delete/:id' element={<MusclesDelete />} />
            <Route path='/' />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}