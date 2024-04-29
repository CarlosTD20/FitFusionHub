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
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-cyan-900 text-3xl m-8">Eliminar Ejercicio</h1>
            <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
                <p className="text-lg font-semibold m-4">Quieres eliminar el ejercicio: {selectedRoutine?.name}</p>
                <div className="flex flex-row justify-center gap-12 items-center">
                    <Link to={`/routines`}>
                        <button className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600" onClick={handleDeleteRoutine}>Eliminar</button>
                    </Link>
                    <Link to={`/routines/${id}`}>
                        <button className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4">Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RoutineDelete