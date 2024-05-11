import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { RoutineDetail } from "../../interfaces/Routines"
import { deleteItem, fetchItemById } from "../../service/DataApi"

function RoutineDelete() {

    const { id } = useParams()
    const [selectedRoutine, setSelectedRoutine] = useState<RoutineDetail | null>(null)

    useEffect(() => {
        const handleSelectRoutine = async () => {
            try {
                const response = await fetchItemById<RoutineDetail>('routines', id)
                const deatil = response.data
                setSelectedRoutine(deatil)
            } catch (error) {
                console.error('Error fetching routines detail:', error)
            }
        }

        handleSelectRoutine()
    }, [id])

    const handleDeleteRoutine = async () => {
        try {
            if (id != null) {
                await deleteItem('routines', id)
            } else {
                console.error('Routine ID is null')
            }
        } catch (error) {
            console.error('Error deleting routines: ', error)
        }
        window.location.reload()
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:h-[500px] md:w-[1000px] lg:w-[1224px] rounded-[24px] bg-slate-100 shadow-md">
                <h1 className="font-bold text-4xl  text-fit-b font-archivo m-[48px] text-center">Eliminar Rutina</h1>
                <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-fit-g">
                    <p className="text-lg font-semibold text-center font-archivo ">¿Quieres eliminar la rutina <span className="text-fit-r">{selectedRoutine?.name}</span>?</p>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center mt-8 md:mt-12 lg:gap-[48px]">
                            <Link to={`/routines`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo" onClick={handleDeleteRoutine}>Eliminar</Link>
                            <Link to={`/routines/${id}`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoutineDelete