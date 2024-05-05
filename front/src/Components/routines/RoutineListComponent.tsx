import { useEffect, useState } from "react"
import { Routine, RoutineList } from "../../interfaces/Routines"
import { fetchData } from "../../service/DataApi"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

function RoutinesList() {

  const [routines, setRoutines] = useState<Routine[]>([])

  useEffect(() => {
    fetchData<RoutineList>('routines')
      .then((response) => setRoutines(response.data))
      .catch((error) => console.error('Error fethcing routines: ', error))
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] text-center">Listado de Rutinas</h1>
      <div className="flex items-center justify-center">
        <div className="flex max-w-[1224px] flex-wrap justify-center gap-4">
          {routines.map(routines => (
            <Cards key={routines.id}
              size={CardSize.MEDIUM}
              imageUrl="https://s3-alpha-sig.figma.com/img/3b2d/6ecd/45a965288f215a28bc38014a0c363b61?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlfLFq2ft9kaelHuI4B87TD6iC-LR6ylFDZTIMlUOjbQNLZ195uqv44yLj-E2rPx7YegW2cmWrwV51M~RufynKIkELWeXKx1-T58Bzfh6M1J9o6OHEalNVav3C~YJfaahcgmFAYRKv8-3lA4PJtTDyzEZIDL0D9JD8Qz~sWTwrHZtWdyCeMFvNpr5TJckJeR-tChjF7ksQ-iKnoHAuBXQUmpUVb6~S~72FqTUn2opxzPS99aOexj1kR3JswMGu8qgHXtiOx4Rvz5Su8f-jZJ1KrRFYV5KJH7CBkC90L9xu6Fvz-Eh4IeHFrfvk0N~Sqif8B9oUfKS1OVxizm4dzyBQ__"
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