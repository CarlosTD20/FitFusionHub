import { useEffect, useState } from "react"
import { deleteItem, fetchItemById } from "../../service/DataApi"
import { Link, useParams } from "react-router-dom"
import { ExerciseDetail } from "../../interfaces/Exercises"
import ErrorModal from "../../pages/UIComponents/ErrorModal"

function ExercisesDelete() {

    const { id } = useParams()

    const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        const handleSelectExercise = async () => {
            try {
                const response = await fetchItemById<ExerciseDetail>('exercises', id)
                const detail = response.data
                setSelectedExercise(detail)
            } catch (error) {
                console.log(id)
                console.error('Error fetching exercise detail:', error)

            }
        }

        handleSelectExercise()
    }, [id])

    const handleDeleteExercise = async () => {
        try {
            if (id !== null) {
                await deleteItem('exercises', id)
                setErrorMessage('')
            } else {
                console.error('Exercise ID is null.')
                setErrorMessage('Exercise ID is null.')
            }
        } catch (error) {
            setErrorMessage('Este ejercicio está dentro de alguna rutina, elimine primero la rutina.')
            console.error('Error deleting exercise:', error)
        }
    }

    const handleCloseModal = () => {
        setErrorMessage('')
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:h-[500px] md:w-[1000px] lg:w-[1224px] rounded-[24px] bg-slate-100 shadow-md">
                <h1 className="font-bold text-4xl text-fit-b m-[48px] text-center font-archivo ">Eliminar Ejercicio</h1>
                <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-fit-g">
                    <p className="text-lg  text-center font-archivo font-semibold">¿Quieres eliminar el ejercicio <span className="text-fit-r">{selectedExercise?.name}</span>?</p>
                    {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={handleCloseModal} />}
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center mt-8 md:mt-12 lg:gap-[48px]">
                            <Link to={`/exercises`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo" onClick={handleDeleteExercise}>Eliminar</Link>
                            <Link to={`/exercises/${id}`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExercisesDelete