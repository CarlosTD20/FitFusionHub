import { useEffect, useState } from "react";
import { ExerciseDetail } from "../../interfaces/Exercises";
import { fetchItemById } from "../../api/DataApi";
import { Link, useParams } from "react-router-dom";

export default function DetailExercise() {

    const {id} = useParams();

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
            <h1 className="text-cyan-950 text-3xl mb-4">Detail Exercise</h1>

            {selectedExercise && (

                <div>
                    <div>
                        <p>ID:<span> {selectedExercise.id}</span></p>
                        <p>Name:<span> {selectedExercise.name}</span></p>
                        <p>Description: {selectedExercise.description}</p>
                        <p>Muscle ID: {selectedExercise.muscle?.id}</p>
                        <p>Muscle Name: {selectedExercise.muscle?.name}</p>
                    </div>
                    <div className="flex flex-row justify-center gap-12 items-center p-8">
                        <Link to={`/exercises/update/${id}`}>
                            <button className="bg-green-700 w-16 h-10 rounded">Editar</button>
                        </Link>
                        <Link to={`/exercises/delete/${id}`}>
                            <button className="bg-red-700 w-16 h-10 rounded">Eliminar</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}