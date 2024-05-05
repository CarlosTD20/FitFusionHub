import { useEffect, useState } from "react"
import { addItem, fetchData } from "../../service/DataApi"
import { ExerciseMock } from "../../interfaces/Exercises"
import { Muscle } from "../../interfaces/Muscles"
import { Link } from "react-router-dom"
import ErrorModal from "../../pages/UIComponents/ErrorModal"

function ExercisesInsert() {
    const [newExerciseName, setNewExerciseName] = useState<string>('')
    const [newExerciseDescription, setNewExerciseDescription] = useState<string>('')
    const [muscles, setMuscles] = useState<Muscle[]>([])
    const [selectedMuscleId, setSelectedMuscleId] = useState<number | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        fetchData<Muscle[]>('muscles')
            .then((response) => setMuscles(response.data))
            .catch(error => console.error('Error fetching muscles:', error))
    }, [])

    const handleAddExercise = async () => {
        try {
            const newExercise: ExerciseMock = {
                name: newExerciseName,
                description: newExerciseDescription,
                muscleId: selectedMuscleId || 0
            }
            await addItem<ExerciseMock>('exercises', newExercise)
            setNewExerciseName('')
            setNewExerciseDescription('')
            setSelectedMuscleId(null)
            setErrorMessage('')
            window.location.reload()
        } catch (error) {
            console.error('Error adding exercise:', error)
            setErrorMessage(error.response.data.message)
        }
    }

    const handleCloseModal = () => {
        setErrorMessage('')
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:h-[615px] md:w-[900px] lg:w-[1224px] rounded-[24px] bg-slate-100 shadow-md">
                <h1 className="font-bold text-3xl md:text-4xl text-fit-b m-8">Nuevo Ejercicio</h1>

                <div className="flex justify-center items-center m-[24px] h-full md:h-auto">
                    <div className="flex flex-col justify-center items-center rounded-lg p-8 w-[80vw] md:w-[500px] lg:w-[726px] bg-fit-g md:mb-8">
                        <div className="mb-4">
                            <label htmlFor="exerciseName" className="block text-lg font-semibold mb-1">Nombre del Ejercicio:</label>
                            <input type="text" value={newExerciseName} onChange={e => setNewExerciseName(e.target.value)} className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exerciseDescription" className="block text-lg font-semibold mb-1">Descripción del Ejercicio:</label>
                            <input type="text" value={newExerciseDescription} onChange={e => setNewExerciseDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="muscleSelect" className="block text-lg font-semibold mb-1">Seleccionar Músculo:</label>
                            <select id="muscleSelect" value={selectedMuscleId || ''} onChange={e => setSelectedMuscleId(parseInt(e.target.value))} className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                                <option value="">Seleccione el Músculo</option>
                                {muscles.map(muscle => (
                                    <option key={muscle.id} value={muscle.id}>{muscle.name}</option>
                                ))}
                            </select>
                        </div>
                        {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={handleCloseModal} />}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center m-4 md:m-[24px] lg:gap-[48px]">
                        <button className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo" onClick={handleAddExercise}>Añadir</button>
                        <Link to={`/`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Cancelar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExercisesInsert