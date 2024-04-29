import { useEffect, useState } from "react"
import { fetchData } from "../../service/DataApi"
import { Exercise, ExerciseList } from "../../interfaces/Exercises"
import { Link } from "react-router-dom"
import SeeSVG from "../../pages/UIComponents/SDetailSVG"

 function ExercisesList() {

    const [exercises, setExercises] = useState<Exercise[]>([])

    useEffect(() => {
        fetchData<ExerciseList>('exercises')
            .then((response) => setExercises(response.data))
            .catch(error => console.error('Error fetching exercises:', error))
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-cyan-950 text-3xl m-6 font-mono font-bold">Ejercicios</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercises.map(exercise => (
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center" key={exercise.id}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{exercise.name}</h5>
                        <Link to={`/exercises/${exercise.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200">
                            <span className="mr-2 ">Leer más</span>
                            {<SeeSVG fill="#fefefe" />}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="m-8 flex justify-center w-1/2 mb-4">
                <Link to="/exercises/insert">
                    <button className="w-20 h-16 rounded text-2 text-white dark:bg-gray-500 hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200">Añadir nuevo</button>
                </Link>
            </div>
        </div>
    )
}

export default ExercisesList