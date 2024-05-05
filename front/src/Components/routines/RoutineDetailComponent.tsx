import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { RoutineDetail } from "../../interfaces/Routines"
import { fetchItemById } from "../../service/DataApi"
import SeeSVG from "../../pages/UIComponents/SDetailSVG"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

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
    <div className="flex justify-center items-center">
      <div className="flex-col flex justify-center items-center h-[615px] w-[1224px] rounded-[24px] md:flex-row">
        <div className="h-[584px] w-[473px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col shadow">
          <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px]">Ejercicios de la Rutina</h1>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[360px] h-[360px] gap-[12px] overflow-x-auto">
              {selectedRoutine && selectedRoutine.exercise.map((exercise) => (
                <Cards key={exercise.id}
                  size={CardSize.SMALL}
                  imageUrl="https://s3-alpha-sig.figma.com/img/3b2d/6ecd/45a965288f215a28bc38014a0c363b61?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlfLFq2ft9kaelHuI4B87TD6iC-LR6ylFDZTIMlUOjbQNLZ195uqv44yLj-E2rPx7YegW2cmWrwV51M~RufynKIkELWeXKx1-T58Bzfh6M1J9o6OHEalNVav3C~YJfaahcgmFAYRKv8-3lA4PJtTDyzEZIDL0D9JD8Qz~sWTwrHZtWdyCeMFvNpr5TJckJeR-tChjF7ksQ-iKnoHAuBXQUmpUVb6~S~72FqTUn2opxzPS99aOexj1kR3JswMGu8qgHXtiOx4Rvz5Su8f-jZJ1KrRFYV5KJH7CBkC90L9xu6Fvz-Eh4IeHFrfvk0N~Sqif8B9oUfKS1OVxizm4dzyBQ__"
                  text={`${exercise.name}`}
                  link={`/exercises/${exercise.id}`}>
                </Cards>
              ))}
            </div>
          </div>
        </div>
        {selectedRoutine && (
          <div className="h-[584px] w-[726px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px]">Rutina {selectedRoutine.name}</h1>
              <h2 className="text-[42px] leading-[52px] pt-[16px] m-[30px]">Descripción</h2>
              <p className="m-[26px] font-medium">{selectedRoutine.description}</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center m-[24px] gap-[48px]">
                <Link to={`/routines/update/${id}`} className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Editar</Link>
                <Link to={`/routines/delete/${id}`} className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Eliminar</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoutinesDetail