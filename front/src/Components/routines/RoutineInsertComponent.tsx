import { useEffect, useState } from "react"
import { RoutineMock } from "../../interfaces/Routines"
import { Exercise, ExerciseList } from "../../interfaces/Exercises"
import { Link, useParams } from "react-router-dom"
import { addItem, fetchData } from "../../service/DataApi"

function RoutineInsert() {

  const { id } = useParams()

  const [routineData, setRoutineData] = useState<RoutineMock>({
    name: '',
    description: '',
    exerciseId: []
  })

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [selectedExerciseIds, setSelectedExerciseIds] = useState<number[]>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetchData<ExerciseList>('exercises')
      .then((response) => { setExercises(response.data) })
      .catch((error) => {
        console.error("Error fetching exercises:", error)
        setError(error.response.data.message)
      })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRoutineData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleInsertRoutine = async () => {
    try {
      const newRoutine: RoutineMock = {
        name: routineData.name,
        description: routineData.description,
        exerciseId: selectedExerciseIds
      }
      console.log(newRoutine)
      await addItem<RoutineMock>('routines', newRoutine)
      console.log('Routine inserted successfully')
      window.location.reload()
    } catch (error) {
      console.error('Error inserting routine:', error)
      setError(error.response.data.message)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <h1 className="text-cyan-900 text-3xl m-8">Insertar Rutina</h1>

      <div className="border border-gray-300 rounded-lg p-8 shadow-md bg-gray-400">
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
          <select multiple
            value={selectedExerciseIds.map(id => id.toString())}
            onChange={e =>
              setSelectedExerciseIds(
                Array.from(e.target.selectedOptions, (option: any) => parseInt(option.value))
              )
            } className="border border-gray-400 rounded px-3 py-2 w-64">
            <option value="">Seleccionar Ejercicios</option>
            {exercises.map(exercise => (
              <option key={exercise.id} value={exercise.id.toString()}>{exercise.name}</option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex flex-row justify-center gap-12 items-center">
          <button className="w-36 h-12 rounded-lg text-xl text-white bg-green-700 hover:bg-green-600 mr-4" onClick={handleInsertRoutine}>Insertar</button>
          <Link to="/routines" className="text-white">
            <button className="w-36 h-12 rounded-lg text-xl text-white bg-red-700 hover:bg-red-600">Cancelar</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default RoutineInsert