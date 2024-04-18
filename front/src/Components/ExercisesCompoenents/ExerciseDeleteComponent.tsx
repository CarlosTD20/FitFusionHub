import { useEffect, useState } from "react";
import { deleteItem, fetchItemById } from "../../api/DataApi";
import { Link, useParams } from "react-router-dom";
import { ExerciseDetail } from "../../interfaces/Exercises";

export default function DeleteExercise() {

    const params = useParams();

    const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null);

    useEffect(() => {
        const handleSelectExercise = async () => {
            try {
                const response = await fetchItemById<ExerciseDetail>('exercises', params.id);
                const detail = response.data; // Acceder a la propiedad data
                console.log(detail?.id);
                setSelectedExercise(detail);
            } catch (error) {
                console.error('Error fetching exercise detail:', error);
            }
        };

        handleSelectExercise()
    }, [params.id])

    const handleDeleteExercise = async () => {
        try {
            if (params.id !== null) {
                await deleteItem('exercises', params.id);
                console.log(`Exercise with ID ${params.id} deleted successfully.`);
            } else {
                console.error('Exercise ID is null.');
            }
        } catch (error) {
            console.error('Error deleting exercise:', error);
        }
    };

    return (
        <div>
            <h1>Delete Exercise</h1>
            <p>Quieres eliminar el ejercicio: {selectedExercise?.name}</p>
            <div className="flex flex-row justify-center gap-12 items-center p-8">
                <Link to={`/exercises`}>
                    <button className="bg-red-700 w-16 h-10 rounded" onClick={handleDeleteExercise}>Eliminar</button>
                </Link>
                <Link to={`/exercises/${params.id}`}>
                    <button className="bg-yellow-500 w-16 h-10 rounded">Cancelar</button>
                </Link>
            </div>
        </div>
    );
}