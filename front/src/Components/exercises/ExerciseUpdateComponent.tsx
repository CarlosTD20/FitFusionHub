import { useEffect, useState } from "react"
import { fetchItemById, updateItem, fetchData } from "../../service/DataApi"
import { ExerciseDetail, ExerciseMock } from "../../interfaces/Exercises"
import { Link, useParams } from "react-router-dom"
import { Muscle, MuscleList } from "../../interfaces/Muscles"
import ErrorModal from "../../pages/UIComponents/ErrorModal"

function ExerciseUpdate() {
    const { id } = useParams()

    const [exerciseData, setExerciseData] = useState({
        name: '',
        description: '',
        muscleId: ''
    })

    const [muscles, setMuscles] = useState<Muscle[]>([])
    const [selectedMuscleId, setSelectedMuscleId] = useState('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        const fetchExerciseDetails = async () => {
            try {
                const response = await fetchItemById<ExerciseDetail>('exercises', id)
                const detail = response.data
                setExerciseData({
                    name: detail.name,
                    description: detail.description,
                    muscleId: detail.muscle?.id || ''
                })
                setSelectedMuscleId(detail.muscle?.id || '')
            } catch (error) {
                console.error('Error fetching exercise detail:', error)
            }
        }

        fetchExerciseDetails()

        fetchData<MuscleList>('muscles')
            .then((response) => setMuscles(response.data))
            .catch(error => console.error('Error fetching muscles:', error))

    }, [id])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setExerciseData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleUpdateExercise = async () => {
        try {
            const updatedExercise: ExerciseMock = {
                name: exerciseData.name,
                description: exerciseData.description,
                muscleId: parseInt(selectedMuscleId) || 0
            }
            console.log(updatedExercise)
            await updateItem<ExerciseMock>('exercises', id, updatedExercise)
            console.log('Exercise updated successfully')
            setErrorMessage('')
            window.location.reload()
        } catch (error) {
            console.error('Error updating exercise:', error)
            setErrorMessage(error.response.data.message)
        }
    }

    const handleCloseModal = () => {
        setErrorMessage('')
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:h-[615px] md:w-[900px] lg:w-[1224px] rounded-[24px] bg-slate-100 shadow-md">
                <h1 className="font-bold text-3xl md:text-4xl text-fit-b m-8 font-archivo ">Actualizar Ejercicio</h1>
                <div className="flex flex-col justify-center items-center m-[24px] h-full md:h-auto">
                    <div className="flex flex-col justify-center items-center rounded-lg p-8 w-[80vw] md:w-[500px] lg:w-[726px] bg-fit-g md:mb-8">
                        <div className="mb-4">
                            <label htmlFor="exerciseName" className="block text-lg font-semibold mb-1 font-archivo ">Nombre:</label>
                            <input type="text" id="exerciseName" name="name" value={exerciseData.name} onChange={handleInputChange} className="border border-gray-400 rounded px-3 py-2 w-64" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exerciseDescription" className="block text-lg font-semibold mb-1 font-archivo ">Descripción:</label>
                            <input type="text" id="exerciseDescription" name="description" value={exerciseData.description} onChange={handleInputChange} className="border border-gray-400 rounded px-3 py-2 w-64 resize-y" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exerciseMuscleId" className="block text-lg font-semibold mb-1 font-archivo ">Músculo:</label>
                            <select value={selectedMuscleId || ''} onChange={e => setSelectedMuscleId(e.target.value)} className="border border-gray-400 rounded px-3 py-2 w-64">
                                <option value="">Selecionar Músculo</option>
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
                        <Link to={`/exercises/${id}`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo" onClick={handleUpdateExercise}>Actualizar</Link>
                        <Link to={`/exercises/${id}`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Cancelar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExerciseUpdate