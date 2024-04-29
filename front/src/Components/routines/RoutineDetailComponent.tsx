import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { RoutineDetail } from "../../interfaces/Routines"
import { fetchItemById } from "../../service/DataApi"
import SeeSVG from "../../pages/UIComponents/SDetailSVG"

function RoutinesDetail() {

  const { id } = useParams()

  const [selectedRoutine, setSelectedRoutine] = useState<RoutineDetail | null>(null)

  useEffect(() => {
    const handleSelectRoutine = async () => {
      try {
        const response = await fetchItemById<RoutineDetail>('routines', id)
        const detail = response.data
        console.log(detail)
        setSelectedRoutine(detail)
      } catch (error) {
        console.error('Error fetching routine deatil: ', error)
      }
    }

    handleSelectRoutine()
  }, [id])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-cyan-900 text-3xl m-8">Detalle de la Rutina</h1>
      {selectedRoutine && (
        <div className="flex flex-col justify-center items-center m-6 ">
          <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
            <div className="mb-4">
              <p className="text-lg font-semibold mb-1">Nombre: <span className="font-normal">{selectedRoutine.name}</span></p>
              <p className="text-lg font-semibold mb-1">Descripción: <span className="font-normal">{selectedRoutine.description}</span></p>
              <p className="text-lg font-semibold mb-1">Ejercicios:</p>
              <ul>
                {selectedRoutine.exercise.map((exercise) => (
                  <li className="flex items-center" key={exercise.id}>
                    <p className="mr-2">{exercise.name}</p>
                    <Link to={`/exercises/${exercise.id}`}>
                      <SeeSVG fill="#1D4ED8" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row justify-center gap-12 items-center">
              <Link to={`/routines/update/${id}`}>
                <button className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4">Editar</button>
              </Link>
              <Link to={`/routines/delete/${id}`}>
                <button className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600">Eliminar</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoutinesDetail