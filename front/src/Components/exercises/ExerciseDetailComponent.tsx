import { useEffect, useState } from "react"
import { ExerciseDetail } from "../../interfaces/Exercises"
import { ResourceType, fetchItemById } from "../../service/DataApi"
import { Link, useParams } from "react-router-dom"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

function ExercisesDetail() {

    const { id } = useParams()

    const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null)

    useEffect(() => {
        const handleSelectExercise = async () => {
            try {
                const response = await fetchItemById<ExerciseDetail>(ResourceType.EXERCISES, id)
                const detail = response.data
                setSelectedExercise(detail)
            } catch (error) {
                console.error('Error fetching exercise detail:', error)
            }
        }

        handleSelectExercise()
    }, [id])


    return (
        <div className="flex justify-center items-center">
            <div className="flex-col flex justify-center items-center h-[615px] w-[1224px] rounded-[24px] md:flex-row">
                <div className="h-[584px] w-[473px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col shadow">
                    <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] font-archivo ">Detalle Ejercicio</h1>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center w-[360px] h-[360px] gap-[12px] overflow-x-auto">

                            <Cards key={selectedExercise?.muscle.id}
                                size={CardSize.SMALL}
                                imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                text={`${selectedExercise?.muscle?.name}`}
                                link={`/muscles/${selectedExercise?.muscle.id}`}>
                            </Cards>

                        </div>
                    </div>
                </div>
                <div className="h-[584px] w-[726px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] font-archivo ">Ejercicio {selectedExercise?.name}</h1>
                        <h2 className="text-[42px] leading-[52px] pt-[16px] m-[30px] font-archivo font-semibold">Descripción</h2>
                        <p className="m-[26px] font-medium">{selectedExercise?.description}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center m-[24px] gap-[48px]">
                            <Link to={`/exercises/update/${id}`} className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Editar</Link>
                            <Link to={`/exercises/delete/${id}`} className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Eliminar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExercisesDetail