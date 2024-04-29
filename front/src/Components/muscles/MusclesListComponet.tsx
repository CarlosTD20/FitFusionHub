import { useEffect, useState } from "react"
import { Muscle, MuscleList } from "../../interfaces/Muscles"
import { fetchData } from "../../service/DataApi";
import { Link } from "react-router-dom";
import SeeSVG from "../../pages/UIComponents/SDetailSVG";

function MusclesList() {

  const [muscles, setMuscles] = useState<Muscle[]>([]);

  useEffect(() => {
    fetchData<MuscleList>('muscles')
      .then((response) => setMuscles(response.data))
      .catch(error => console.log('Error fetching muscles:', error))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-cyan-950 text-3xl m-6 font-mono font-bold">Muscles</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {muscles.map(muscle => (
          <div className="w-80 m-14 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center" key={muscle.id}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{muscle.name}</h5>
            <div className="flex justify-center">
              <img className="w-36 h-28 rounded" src={`/src/assets/muscles/musculo-${muscle.id}.jpg`} alt="" />
            </div>

            <Link to={`/muscles/${muscle.id}`} className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200">
              <span className="mr-2">Read more</span>
              {<SeeSVG fill="#fefefe" />}
            </Link>
          </div>
        ))}
      </div>
      <div className="m-8 flex justify-center w-1/2 mb-4">
                <Link to="/muscles/insert">
                    <button className="w-20 h-16 rounded text-2 text-white dark:bg-gray-500 hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200">Add NEW</button>
                </Link>
            </div>
    </div>
  )
}

export default MusclesList