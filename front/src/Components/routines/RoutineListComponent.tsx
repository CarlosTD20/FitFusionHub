import { useEffect, useState } from "react"
import { Routine, RoutineList } from "../../interfaces/Routines"
import { ResourceType, fetchData } from "../../service/DataApi"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

function RoutinesList() {

  const [routines, setRoutines] = useState<Routine[]>([])

  useEffect(() => {
    fetchData<RoutineList>(ResourceType.ROUTINES)
      .then((response) => setRoutines(response.data))
      .catch((error) => console.error('Error fethcing routines: ', error))
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] text-center font-archivo">Listado de Rutinas</h1>
      <div className="flex items-center justify-center">
        <div className="flex max-w-[1224px] flex-wrap justify-center gap-4">
          {routines.map(routines => (
            <Cards key={routines.id}
              size={CardSize.MEDIUM}
              imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text={`${routines.name}`}
              link={`/routines/${routines.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoutinesList