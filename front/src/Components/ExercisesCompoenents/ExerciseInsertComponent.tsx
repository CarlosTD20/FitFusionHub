import React, { useEffect, useState } from "react";
import { addItem, fetchData } from "../../api/DataApi";
import { ExerciseInsert } from "../../interfaces/Exercises";
import { Muscle } from "../../interfaces/Muscles";
import { Link } from "react-router-dom";

export default function InsertExercise() {
    const [newExerciseName, setNewExerciseName] = useState<string>('');
    const [newExerciseDescription, setNewExerciseDescription] = useState<string>('');
    const [muscles, setMuscles] = useState<Muscle[]>([]);
    const [selectedMuscleId, setSelectedMuscleId] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        fetchData<Muscle[]>('muscles')
            .then((response) => setMuscles(response.data))
            .catch(error => console.error('Error fetching muscles:', error))
    }, []);

    const handleAddExercise = async () => {
        try {
            const newExercise: ExerciseInsert = {
                name: newExerciseName,
                description: newExerciseDescription,
                muscleId: selectedMuscleId || 0
            };
            await addItem<ExerciseInsert>('exercises', newExercise);
            setNewExerciseName('')
            setNewExerciseDescription('')
            setSelectedMuscleId(null)
            setErrorMessage('')
            window.location.reload()
        } catch (error) {
            console.error('Error adding exercise:', error)
            setErrorMessage(error.response.data.message)
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-cyan-900 text-3xl m-8">Agregar Nuevo Ejercicio</h1>
            <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400 flex flex-col items-center">
                <div className="flex flex-col mb-4">
                    <label htmlFor="exerciseName" className="text-lg font-semibold mb-1">Nombre del Ejercicio:</label>
                    <input
                        type="text"
                        value={newExerciseName}
                        onChange={e => setNewExerciseName(e.target.value)}
                        className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="exerciseDescription" className="text-lg font-semibold mb-1">Descripción del Ejercicio:</label>
                    <input
                        type="text"
                        value={newExerciseDescription}
                        onChange={e => setNewExerciseDescription(e.target.value)}
                        className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="muscleSelect" className="text-lg font-semibold mb-1">Seleccionar Músculo:</label>
                    <select
                        id="muscleSelect"
                        value={selectedMuscleId || ''}
                        onChange={e => setSelectedMuscleId(parseInt(e.target.value))}
                        className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Seleccione el Músculo</option>
                        {muscles.map(muscle => (
                            <option key={muscle.id} value={muscle.id}>{muscle.name}</option>
                        ))}
                    </select>
                </div>
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                <div className="flex flex-row justify-center gap-12 items-center">
                    <button
                        className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4"
                        onClick={handleAddExercise}
                    >
                        Anadir
                    </button>
                    <Link to="/exercises">
                        <button
                            className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600"
                        >
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
