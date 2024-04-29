import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="dark:bg-gray-800 py-4 px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
                <Link to="/"><h1 className="text-yellow-500 text-2xl font-semibold">FitFusionHub</h1></Link>
            </div>
            <nav className="flex flex-col md:flex-row items-center md:mx-auto md:flex-grow md:justify-center flex-wrap">
                <Link to="/exercises"
                    className="text-white hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200 p-2 mr-4 mb-2 md:mb-0">Ejercicios</Link>
                <Link to="/muscles"
                    className="text-white hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200 p-2 mr-4 mb-2 md:mb-0">Músculos</Link>
                <Link to="/routines"
                    className="text-white hover:bg-yellow-500 hover:rounded-full transition-all duration-500 ease-in-out delay-200 p-2 mr-4 mb-2 md:mb-0">Rutinas</Link>
            </nav>
        </header>
    )
}

export default Header