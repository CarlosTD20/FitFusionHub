import { useEffect, useState } from "react";
import { fetchItemById, updateItem } from "../../api/DataApi";
import { ExerciseInsert } from "../../interfaces/Exercises";
import { Link, useParams } from "react-router-dom";

export default function UpdateExercise() {

    const {id} = useParams();

    const [selectedExercise, setSelectedExercise] = useState(null);
    const [newExerciseName, setNewExerciseName] = useState('');
    const [newExerciseDescription, setNewExerciseDescription] = useState('');
    const [newExerciseMuscleId, setNewExerciseMuscleId] = useState('');

    useEffect(() => {
        const fetchExerciseDetails = async () => {
            try {
                const response = await fetchItemById('exercises', id);
                const detail = response.data;
                setSelectedExercise(detail);
                setNewExerciseName(detail.name);
                setNewExerciseDescription(detail.description);
                setNewExerciseMuscleId(detail.muscle?.id);
            } catch (error) {
                console.error('Error fetching exercise detail:', error);
            }
        };

        fetchExerciseDetails();
    }, [id]);

    const handleUpdateExercise = async () => {
        try {
            const updatedExercise: ExerciseInsert = {
                name: newExerciseName,
                description: newExerciseDescription,
                muscleId: parseInt(newExerciseMuscleId) || selectedExercise!.muscle.id || 0
            };

            await updateItem<ExerciseInsert>('exercises', id, updatedExercise);
            console.log('Exercise updated successfully');

        } catch (error) {
            console.error('Error updating exercise:', error);
        }
    };


    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <h2>Exercise Editor - ID: {id}</h2>

            <div>
                <label htmlFor="exerciseName">Name:</label>
                <input type="text" id="exerciseName" value={newExerciseName} onChange={e => setNewExerciseName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="exerciseDescription">Description:</label>
                <input type="text" id="exerciseDescription" value={newExerciseDescription} onChange={e => setNewExerciseDescription(e.target.value)} />
            </div>

            <div>
                <label htmlFor="exerciseMuscleId">Muscle ID:</label>
                <input type="text" id="exerciseMuscleId" value={newExerciseMuscleId} onChange={e => setNewExerciseMuscleId(e.target.value)} />
            </div>


            <div className="flex flex-row justify-center gap-12 items-center p-8">
                <Link to={`/exercises/${id}`}>
                    <button className="bg-green-700 w-16 h-10 rounded" onClick={handleUpdateExercise} >Actualizar</button>
                </Link>
                <Link to={`/exercises/${id}`}>
                    <button className="bg-red-700 w-16 h-10 rounded">Cancelar</button>
                </Link>
            </div>
        </div>
    );
}