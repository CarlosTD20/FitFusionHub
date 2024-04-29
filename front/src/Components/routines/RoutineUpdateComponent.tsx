import { useEffect, useState } from "react";
import { fetchData, fetchItemById, updateItem } from "../../service/DataApi";
import { Link, useParams } from "react-router-dom";
import { Exercise, ExerciseList } from "../../interfaces/Exercises";
import { RoutineDetail, RoutineMock } from "../../interfaces/Routines";


function RoutineUpdate() {

    const { id } = useParams();

    const [routineData, setRoutineData] = useState<RoutineDetail>({
        id: 0,
        name: '',
        description: '',
        exercise: []
    });

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [selectedExerciseIds, setSelectedExerciseIds] = useState<number[]>([]);

    useEffect(() => {
        const fetchRoutineDetails = async () => {
            try {
                const response = await fetchItemById<RoutineDetail>('routines', id);
                const detail = response.data;
                setRoutineData(detail);
                setSelectedExerciseIds(detail.exercises?.map((exercise: Exercise) => exercise.id) || [])
            } catch (error) {
                console.error('Error fetching routine detail:', error);
            }
        };

        fetchRoutineDetails();

        fetchData<ExerciseList>('exercises')
            .then((response) => {
                setExercises(response.data);
                setSelectedExerciseIds(response.data.map((exercise: Exercise) => exercise.id))
            })
            .catch(error => console.error('Error fetching exercises:', error));

    }, [id]);

    useEffect(() => {
        setSelectedExerciseIds(prevIds => prevIds.filter(id => routineData.exercise.some((exercise: Exercise) => exercise.id === id)));
    }, [routineData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRoutineData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleUpdateRoutine = async () => {
        try {
            const updatedRoutine: RoutineMock = {
                name: routineData.name,
                description: routineData.description,
                exerciseId: selectedExerciseIds
            }
            await updateItem<RoutineMock>('routines', id, updatedRoutine);
            console.log('Routine updated successfully');
        } catch (error) {
            console.error('Error updating routine:', error);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <h1 className="text-cyan-900 text-3xl m-8">Editar Rutina</h1>

            <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
                <div className="mb-4">
                    <label htmlFor="routineName" className="text-lg font-semibold mb-1 block">Nombre:</label>
                    <input type="text" id="routineName" name="name" value={routineData.name} onChange={handleInputChange} className="border border-gray-400 rounded px-3 py-2 w-64" />
                </div>

                <div className="mb-4">
                    <label htmlFor="routineDescription" className="text-lg font-semibold mb-1 block">Descripción:</label>
                    <input type="text" id="routineDescription" name="description" value={routineData.description} onChange={handleInputChange} className="border border-gray-400 rounded px-3 py-2 w-64 resize-y" />
                </div>

                <div className="mb-4">
                    <label htmlFor="routineExerciseIds" className="text-lg font-semibold mb-1 block">Ejercicios:</label>
                    <select multiple value={selectedExerciseIds.map(String)} onChange={e => setSelectedExerciseIds(Array.from(e.target.selectedOptions, (option: any) => option.value))} className="border border-gray-400 rounded px-3 py-2 w-64">
                        <option value="">Seleccionar Ejercicios</option>
                        {exercises.map(exercise => (
                            <option key={exercise.id} value={exercise.id.toString()}>{exercise.name}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-row justify-center gap-12 items-center">
                    <Link to={`/routines/${id}`}>
                        <button className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4" onClick={handleUpdateRoutine}>Actualizar</button>
                    </Link>
                    <Link to={`/routines/${id}`} className="text-white">
                        <button className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600">Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RoutineUpdate