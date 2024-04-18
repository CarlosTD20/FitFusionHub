import { useState } from "react";
import { addItem } from "../../api/DataApi";
import { ExerciseInsert } from "../../interfaces/Exercises";

export default function InsertExercise() {
    const [newExerciseName, setNewExerciseName] = useState<string>('');
    const [newExerciseDescription, setNewExerciseDescription] = useState<string>('');
    const [newExerciseMuscleId, setNewExerciseMuscleId] = useState<number>(0);

    const handleAddExercise = async () => {
        try {
            const newExercise: ExerciseInsert = {
                name: newExerciseName,
                description: newExerciseDescription,
                muscleId: newExerciseMuscleId
            };
            await addItem<ExerciseInsert>('exercises', newExercise);
            setNewExerciseName('');
            setNewExerciseDescription('');
            setNewExerciseMuscleId(0);
        } catch (error) {
            console.error('Error adding exercise:', error);
        }
    };

    return (
        <div>
            <h2>Add New Exercise</h2>
            <input type="text" value={newExerciseName} onChange={e => setNewExerciseName(e.target.value)} placeholder="Exercise Name" />
            <input type="text" value={newExerciseDescription} onChange={e => setNewExerciseDescription(e.target.value)} placeholder="Exercise Description" />
            <input type="number" value={newExerciseMuscleId} onChange={e => setNewExerciseMuscleId(parseInt(e.target.value))} placeholder="Muscle ID" />
            <button onClick={handleAddExercise}>Add Exercise</button>
        </div>
    );
}