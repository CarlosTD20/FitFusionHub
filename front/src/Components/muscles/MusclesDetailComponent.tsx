import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MuscleDetail } from "../../interfaces/Muscles"
import { fetchItemById } from "../../service/DataApi"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

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
    <div className="flex justify-center items-center">
      <div className="flex-col flex justify-center items-center h-[615px] w-[1224px] rounded-[24px] md:flex-row">
        <div className="h-[584px] w-[473px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col shadow">
          <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] font-archivo ">Ejercicios del Músculo</h1>
          <div className="flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center w-[360px] h-[400px] gap-[12px] overflow-x-auto">
              {selectedMuscle && selectedMuscle.exercise.map((exercise) => (
                <Cards key={exercise.id}
                  size={CardSize.SMALL}
                  imageUrl="https://s3-alpha-sig.figma.com/img/3b2d/6ecd/45a965288f215a28bc38014a0c363b61?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlfLFq2ft9kaelHuI4B87TD6iC-LR6ylFDZTIMlUOjbQNLZ195uqv44yLj-E2rPx7YegW2cmWrwV51M~RufynKIkELWeXKx1-T58Bzfh6M1J9o6OHEalNVav3C~YJfaahcgmFAYRKv8-3lA4PJtTDyzEZIDL0D9JD8Qz~sWTwrHZtWdyCeMFvNpr5TJckJeR-tChjF7ksQ-iKnoHAuBXQUmpUVb6~S~72FqTUn2opxzPS99aOexj1kR3JswMGu8qgHXtiOx4Rvz5Su8f-jZJ1KrRFYV5KJH7CBkC90L9xu6Fvz-Eh4IeHFrfvk0N~Sqif8B9oUfKS1OVxizm4dzyBQ__"
                  text={`${exercise.name}`}
                  link={`/exercises/${exercise.id}`}
                >
                </Cards>
              ))}
            </div>
          </div>



        </div>
        {selectedMuscle && (
          <div className="h-screen flex items-center justify-center">
            <div className="h-[584px] w-[726px] rounded-[24px] border bg-slate-100 m-[12px] flex justify-center items-center">
              <h1 className="font-bold text-5xl leading-[52px] pt-[16px] m-[20px] font-archivo"> {selectedMuscle.name}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MusclesDetail