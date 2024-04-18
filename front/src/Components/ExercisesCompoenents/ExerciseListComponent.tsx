import { useEffect, useState } from "react";
import { fetchData } from "../../api/DataApi";
import { Exercise, ExerciseList } from "../../interfaces/Exercises";
import { Link } from "react-router-dom";
import SeeSVG from "../UIComponents/SDetailSVG";
import InsertExercise from "./ExerciseInsertComponent";

export default function ListExercises() {

    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(() => {
        fetchData<ExerciseList>('exercises')
            .then((response) => setExercises(response.data))
            .catch(error => console.error('Error fetching exercises:', error));
    }, []);

    return (

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-cyan-950 text-3xl mb-4">Exercises</h1>
            <div className="grid grid-cols-2 gap-4">
                {exercises.map(exercise => (
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" key={exercise.id}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{exercise.name}</h5>
                        <Link to={`/exercises/${exercise.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span className="mr-2">Read more</span>
                            {<SeeSVG fill="#fefefe" />}
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <h2>Agregar nuevo Ejercicio</h2>
                <InsertExercise />
            </div>
        </div>
    )
}