import { useEffect, useState } from "react"
import { RoutineMock } from "../../interfaces/Routines"
import { Exercise, ExerciseList } from "../../interfaces/Exercises"
import { Link } from "react-router-dom"
import { addItem, fetchData } from "../../service/DataApi"
import ErrorModal from "../../pages/UIComponents/ErrorModal"

function RoutineInsert() {

  const [routineData, setRoutineData] = useState<RoutineMock>({
    name: '',
    description: '',
    exerciseId: []
  })

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [selectedExerciseIds, setSelectedExerciseIds] = useState<number[]>([])
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    fetchData<ExerciseList>('exercises')
      .then((response) => { setExercises(response.data) })
      .catch((error) => {
        console.error("Error fetching exercises:", error)
        setErrorMessage(error.response.data.message)
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
      setErrorMessage(error.response.data.message)
    }
  }

  const handleCloseModal = () => {
    setErrorMessage('')
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center h-[615px] w-[1224px] rounded-[24px] bg-slate-100 shadow-md">
        <h1 className="font-bold text-3xl text-fit-b m-8 font-archivo">Nueva Rutina</h1>

        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center rounded-lg p-8 w-[80vw] md:w-[500px] lg:w-[726px] bg-fit-g mb-8">
            <div className="mb-4">
              <label htmlFor="routineName" className="block text-lg font-semibold mb-1 font-archivo">Nombre:</label>
              <input type="text" id="routineName" name="name" value={routineData.name} onChange={handleInputChange} className="w-full md:w-64 px-3 py-2 border border-gray-400 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="routineDescription" className="block text-lg font-semibold mb-1 font-archivo">Descripción:</label>
              <input type="text" id="routineDescription" name="description" value={routineData.description} onChange={handleInputChange} className="w-full md:w-64 px-3 py-2 border border-gray-400 rounded resize-y" />
            </div>
            <div className="mb-4">
              <label htmlFor="routineExerciseIds" className="block text-lg font-semibold mb-1 font-archivo">Ejercicios:</label>
              <select multiple
                value={selectedExerciseIds.map(id => id.toString())}
                onChange={e =>
                  setSelectedExerciseIds(
                    Array.from(e.target.selectedOptions, (option: any) => parseInt(option.value))
                  )
                } className="w-full md:w-64 px-3 py-2 border border-gray-400 rounded">
                {exercises.map(exercise => (
                  <option key={exercise.id} value={exercise.id.toString()}>{exercise.name}</option>
                ))}
              </select>
            </div>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={handleCloseModal} />}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center m-4 md:m-[24px] lg:gap-[48px]">
            <button className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo" onClick={handleInsertRoutine}>Insertar</button>
            <Link to={`/`} className="w-[153px] h-[56px] md:w-[180px] md:h-[64px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Cancelar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutineInsert