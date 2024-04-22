import { useEffect, useState } from "react";
import { ExerciseDetail } from "../../interfaces/Exercises";
import { fetchItemById } from "../../api/DataApi";
import { Link, useParams } from "react-router-dom";

export default function DetailExercise() {

    const { id } = useParams();

    const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null);

    useEffect(() => {
        const handleSelectExercise = async () => {
            try {
                const response = await fetchItemById<ExerciseDetail>('exercises', id);
                const detail = response.data; // Acceder a la propiedad data
                console.log(detail?.id);
                setSelectedExercise(detail);
            } catch (error) {
                console.error('Error fetching exercise detail:', error);
            }
        };

        handleSelectExercise()
    }, [id])


    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-cyan-900 text-3xl m-8">Detalle del Ejercicio</h1>

            {selectedExercise && (
                <div className="flex flex-col justify-center items-center m-10">
                    <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
                        <div className="mb-4">
                            <p className="text-lg font-semibold mb-1">Name: <span className="font-normal">{selectedExercise.name}</span></p>
                            <p className="text-lg font-semibold mb-1">Description: <span className="font-normal">{selectedExercise.description}</span></p>
                            <p className="text-lg font-semibold mb-1">Muscle Name: <span className="font-normal">{selectedExercise.muscle?.name}</span></p>
                        </div>
                        <div className="flex flex-row justify-center gap-12 items-center">
                            <Link to={`/exercises/update/${id}`}>
                                <button className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4">Editar</button>
                            </Link>
                            <Link to={`/exercises/delete/${id}`}>
                                <button className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600">Eliminar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}