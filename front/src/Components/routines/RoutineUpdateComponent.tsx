import { useEffect, useState } from "react"
import { fetchData, fetchItemById, updateItem } from "../../service/DataApi"
import { Link, useParams } from "react-router-dom"
import { Exercise, ExerciseList } from "../../interfaces/Exercises"
import { RoutineDetail, RoutineMock } from "../../interfaces/Routines"
import ErrorModal from "../../pages/UIComponents/ErrorModal"


function RoutineUpdate() {

    const { id } = useParams()

    const [routineData, setRoutineData] = useState<RoutineDetail>({
        id: 0,
        name: '',
        description: '',
        exercise: []
    })

    const [exercises, setExercises] = useState<Exercise[]>([])
    const [selectedExerciseIds, setSelectedExerciseIds] = useState<number[]>([])
    const [errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        const fetchRoutineDetails = async () => {
            try {
                const response = await fetchItemById<RoutineDetail>('routines', id)
                const detail = response.data
                setRoutineData(detail)
                setSelectedExerciseIds(detail.exercises?.map((exercise: Exercise) => exercise.id) || [])
            } catch (error) {
                console.error('Error fetching routine detail:', error)
                setErrorMessage(error.response.data.message)
            }
        }

        fetchRoutineDetails()

        fetchData<ExerciseList>('exercises')
            .then((response) => {
                setExercises(response.data)
                setSelectedExerciseIds(response.data.map((exercise: Exercise) => exercise.id))
            })
            .catch(error => {
                console.error('Error fetching exercises:', error)
                setErrorMessage(error.response.data.message)
            })

    }, [id])

    useEffect(() => {
        setSelectedExerciseIds(prevIds => prevIds.filter(id => routineData.exercise.some((exercise: Exercise) => exercise.id === id)))
    }, [routineData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRoutineData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleUpdateRoutine = async () => {
        try {
            const updatedRoutine: RoutineMock = {
                name: routineData.name,
                description: routineData.description,
                exerciseId: selectedExerciseIds
            }
            await updateItem<RoutineMock>('routines', id, updatedRoutine)
            console.log('Routine updated successfully')
            setErrorMessage('')
            window.location.reload()
        } catch (error) {
            console.error('Error updating routine:', error)
            setErrorMessage(error.response.data.message)
        }
    }

    const handleCloseModal = () => {
        setErrorMessage('')
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:h-[650px] md:w-[900px] lg:w-[1224px] rounded-[24px] bg-slate-100 shadow-md">
                <h1 className="font-bold text-3xl md:text-4xl text-fit-b m-8">Actualizar Rutina</h1>
                <div className="flex flex-col justify-center items-center m-[24px] h-full md:h-auto">
                    <div className="flex flex-col justify-center items-center rounded-lg p-8 w-[80vw] md:w-[500px] lg:w-[726px] bg-fit-g md:mb-8">
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
                        {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={handleCloseModal} />}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center m-4 md:m-[24px] lg:gap-[48px]">
                            <Link to={`/routines/${id}`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo" onClick={handleUpdateRoutine}>Actualizar</Link>
                            <Link to={`/routines/${id}`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoutineUpdate