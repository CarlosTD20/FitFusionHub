import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { MuscleDetail } from "../../interfaces/Muscles"
import { fetchItemById } from "../../service/DataApi"
import SeeSVG from "../../pages/UIComponents/SDetailSVG"

function MusclesDetail() {

  const { id } = useParams()

  const [selectedMuscle, setSelectedMuscle] = useState<MuscleDetail | null>(null)

  useEffect(() => {
    const handleSelectedMuscle = async () => {
      try {
        const response = await fetchItemById<MuscleDetail>('muscles', id)
        const detail = response.data
        console.log(detail?.id)
        setSelectedMuscle(detail)
      } catch (error) {
        console.error('Erro fetching muscles detail:', error)
      }
    }
    handleSelectedMuscle()
  }, [id])
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-cyan-900 text-3xl m-4">Detalle del Ejercicio</h1>

      {selectedMuscle && (
        <div className="flex flex-col justify-center items-center m-6 ">
          <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
            <div className="mb-4">
              <p className="text-lg font-semibold mb-1">Nombre: <span className="font-normal">{selectedMuscle.name}</span></p>
              <p className="text-lg font-semibold mb-1">ejercicios:</p>
              <ul>
                {selectedMuscle.exercise.map((exercise) => (
                  <li className="flex items-center" key={exercise.id}>
                    <p className="mr-2">{exercise.name}</p>
                    <Link to={`/exercises/${exercise.id}`}>
                      <SeeSVG fill="#1D4ED8" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MusclesDetail