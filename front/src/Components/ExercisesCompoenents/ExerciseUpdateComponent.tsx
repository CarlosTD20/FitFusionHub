import { useEffect, useState } from "react";
import { fetchItemById, updateItem, fetchData } from "../../api/DataApi";
import { ExerciseInsert } from "../../interfaces/Exercises";
import { Link, useParams } from "react-router-dom";

export default function UpdateExercise() {
    const { id } = useParams();

    const [exerciseData, setExerciseData] = useState({
        name: '',
        description: '',
        muscleId: ''
    });

    const [muscles, setMuscles] = useState([]);
    const [selectedMuscleId, setSelectedMuscleId] = useState('');

    useEffect(() => {
        const fetchExerciseDetails = async () => {
            try {
                const response = await fetchItemById('exercises', id);
                const detail = response.data;
                setExerciseData({
                    name: detail.name,
                    description: detail.description,
                    muscleId: detail.muscle?.id || ''
                });
                setSelectedMuscleId(detail.muscle?.id || ''); // Establecer el músculo seleccionado previamente
            } catch (error) {
                console.error('Error fetching exercise detail:', error);
            }
        };

        fetchExerciseDetails();

        // Obtener la lista de músculos
        fetchData('muscles')
            .then((response) => setMuscles(response.data))
            .catch(error => console.error('Error fetching muscles:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExerciseData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleUpdateExercise = async () => {
        try {
            const updatedExercise: ExerciseInsert = {
                name: exerciseData.name,
                description: exerciseData.description,
                muscleId: parseInt(selectedMuscleId) || 0
            };
            console.log(updatedExercise)
            await updateItem<ExerciseInsert>('exercises', id, updatedExercise);
            console.log('Exercise updated successfully');
        } catch (error) {
            console.error('Error updating exercise:', error);
        }
    };


    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <h1 className="text-cyan-900 text-3xl m-8">Editar Ejercicio</h1>

            <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
                <div className="mb-4">
                    <label htmlFor="exerciseName" className="text-lg font-semibold mb-1 block">Name:</label>
                    <input type="text" id="exerciseName" name="name" value={exerciseData.name} onChange={handleInputChange} className="border border-gray-400 rounded px-3 py-2 w-64" />
                </div>

                <div className="mb-4">
                    <label htmlFor="exerciseDescription" className="text-lg font-semibold mb-1 block">Description:</label>
                    <input type="text" id="exerciseDescription" name="description" value={exerciseData.description} onChange={handleInputChange} className="border border-gray-400 rounded px-3 py-2 w-64 resize-y" />
                </div>

                <div className="mb-4">
                    <label htmlFor="exerciseMuscleId" className="text-lg font-semibold mb-1 block">Muscle:</label>
                    <select value={selectedMuscleId || ''} onChange={e => setSelectedMuscleId(e.target.value)} className="border border-gray-400 rounded px-3 py-2 w-64">
                        <option value="">Select Muscle</option>
                        {muscles.map(muscle => (
                            <option key={muscle.id} value={muscle.id}>{muscle.name}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-row justify-center gap-12 items-center">
                    <Link to={`/exercises/${id}`} className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4" >
                        <button className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4" onClick={handleUpdateExercise}>Actualizar</button>
                    </Link>
                    <Link to={`/exercises/${id}`} className="text-white">
                        <button className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600">Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}