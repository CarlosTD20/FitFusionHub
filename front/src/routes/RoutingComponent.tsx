import { Route, Routes } from "react-router-dom"
import ExercisesList from "../Components/exercises/ExerciseListComponent"
import ExercisesDetail from "../Components/exercises/ExerciseDetailComponent"
import ExercisesInsert from "../Components/exercises/ExerciseInsertComponent"
import ExerciseUpdate from "../Components/exercises/ExerciseUpdateComponent"
import ExercisesDelete from "../Components/exercises/ExerciseDeleteComponent"
import MusclesList from "../Components/muscles/MusclesListComponet"
import MusclesDetail from "../Components/muscles/MusclesDetailComponent"
import RoutinesList from "../Components/routines/RoutineListComponent"
import RoutinesDetail from "../Components/routines/RoutineDetailComponent"
import RoutineInsert from "../Components/routines/RoutineInsertComponent"
import RoutineUpdate from "../Components/routines/RoutineUpdateComponent"
import RoutineDelete from "../Components/routines/RoutineDeleteComponent"
import BodyBento from "../pages/Layout/BodyBento"

function RoutingComponent() {
    return (
        <Routes>
            <Route path='/' element={<BodyBento />}/>
            <Route path='/exercises' element={<ExercisesList />} />
            <Route path='/exercises/:id' element={<ExercisesDetail />} />
            <Route path='/exercises/insert' element={<ExercisesInsert />} />
            <Route path='/exercises/update/:id' element={<ExerciseUpdate />} />
            <Route path='/exercises/delete/:id' element={<ExercisesDelete />} />
            <Route path='/muscles' element={<MusclesList />} />
            <Route path='/muscles/:id' element={<MusclesDetail />} />
            <Route path='/routines' element={<RoutinesList />} />
            <Route path='/routines/:id' element={<RoutinesDetail />} />
            <Route path='/routines/insert' element={<RoutineInsert />} />
            <Route path='/routines/update/:id' element={<RoutineUpdate />} />
            <Route path='/routines/delete/:id' element={<RoutineDelete />} />
        </Routes>
    )
}

export default RoutingComponent