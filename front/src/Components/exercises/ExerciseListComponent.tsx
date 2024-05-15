import { useEffect, useState } from "react"
import { ResourceType, fetchData } from "../../service/DataApi"
import { Exercise, ExerciseList } from "../../interfaces/Exercises"
import Cards, { CardSize } from "../../pages/UIComponents/Cards"

function ExercisesList() {

    const [exercises, setExercises] = useState<Exercise[]>([])

    useEffect(() => {
        fetchData<ExerciseList>(ResourceType.EXERCISES)
            .then((response) => setExercises(response.data))
            .catch(error => console.error('Error fetching exercises:', error))
    }, []);

    return (
        <div className="flex flex-col justify-center">
            <h1 className="font-bold text-[42px] leading-[52px] pt-[16px] m-[20px] text-center font-archivo">Listado de Ejercicios</h1>
            <div className="flex items-center justify-center">
                <div className="flex max-w-[1224px] flex-wrap justify-center gap-4">
                    {exercises.map(exercise => (
                        <Cards key={exercise.id}
                            size={CardSize.MEDIUM}
                            imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            text={`${exercise.name}`}
                            link={`/exercises/${exercise.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExercisesList