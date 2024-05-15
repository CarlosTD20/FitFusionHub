import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MuscleDetail } from "../../interfaces/Muscles"
import { ResourceType, fetchItemById } from "../../service/DataApi"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

function MusclesDetail() {

  const { id } = useParams()

  const [selectedMuscle, setSelectedMuscle] = useState<MuscleDetail | null>(null)

  useEffect(() => {
    const handleSelectedMuscle = async () => {
      try {
        const response = await fetchItemById<MuscleDetail>(ResourceType.MUSCLES, id)
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
                  imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <div className="h-[584px] w-[726px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col justify-center items-center">
              <h1 className="font-bold text-5xl leading-[52px] pt-[16px] m-[20px] font-archivo"> {selectedMuscle.name}</h1>
              <img
                src={`/src/assets/muscles/musculo-${selectedMuscle.id}.png`} 
                alt={selectedMuscle.name}
                className="w-[400px] h-auto bg-transparent rounded-[24px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MusclesDetail