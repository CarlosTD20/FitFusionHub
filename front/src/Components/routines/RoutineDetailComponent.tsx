import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { RoutineDetail } from "../../interfaces/Routines"
import { ResourceType, fetchItemById } from "../../service/DataApi"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"
// import html2canvas from "html2canvas"
// import jsPDF from "jspdf"

function RoutinesDetail() {
  const { id } = useParams()
  const routineRef = useRef(null) // Declarar useRef dentro del componente

  const [selectedRoutine, setSelectedRoutine] = useState<RoutineDetail | null>(null)

  useEffect(() => {
    const handleSelectRoutine = async () => {
      try {
        const response = await fetchItemById<RoutineDetail>(ResourceType.ROUTINES, id)
        const detail = response.data
        console.log(detail)
        setSelectedRoutine(detail)
      } catch (error) {
        console.error('Error fetching routine detail: ', error)
      }
    }

    handleSelectRoutine()
  }, [id])

  // const printPDF = () => {
  //   if (!selectedRoutine) return

  //   const fileName = `routines_${selectedRoutine.name}.pdf`

  //   html2canvas(routineRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png')
  //     const pdf = new jsPDF('p', 'mm', 'a4')
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())
  //     pdf.save(fileName)
  //   })
  // }

  return (
    <div className="flex justify-center items-center">
      {selectedRoutine && (
        <div className="flex-col flex justify-center items-center h-[615px] w-[1224px] rounded-[24px] md:flex-row">
          <div ref={routineRef} className="h-[584px] w-[473px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col shadow">
            <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] font-archivo">Ejercicios de la Rutina</h1>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[360px] h-[360px] gap-[12px] overflow-x-auto">
                {selectedRoutine.exercise.map((exercise) => (
                  <Cards
                    key={exercise.id}
                    size={CardSize.SMALL}
                    imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    text={`${exercise.name}`}
                    link={`/exercises/${exercise.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[584px] w-[726px] rounded-[24px] border bg-slate-100 m-[12px] flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] font-archivo">Rutina {selectedRoutine.name}</h1>
              <h2 className="text-[42px] leading-[52px] pt-[16px] m-[30px] font-archivo">Descripción</h2>
              <p className="m-[26px] font-medium">{selectedRoutine.description}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center m-[24px] gap-[48px]">
                <Link to={`/routines/update/${id}`} className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Editar</Link>
                <Link to={`/routines/delete/${id}`} className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Eliminar</Link>
                {/* <button onClick={printPDF} className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Imprimir PDF</button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoutinesDetail