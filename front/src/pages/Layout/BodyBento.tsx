import { useState } from "react";
import { Link } from "react-router-dom"

function BodyBento() {

    const [correo, setCorreo] = useState('');

    const handleEnviar = () => {
        setCorreo('');
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[22px] pt-[8px] m-[14px]">
                <div className="w-[380px] h-[378px] md:w-[473px] rounded-[24px] bg-fit-b flex flex-col justify-center items-center text-center">
                    <div className="max-w-[300px]">
                        <p className="text-gray-50 text-justify font-archivo font-semibold">
                            ¡Descubre FitFusion hoy mismo y comienza a mejorar tu condición física! Nuestra plataforma web te ofrece una amplia variedad de entrenamientos físicos, con una interfaz intuitiva que te permite acceder fácilmente a diferentes rutinas de ejercicio. ¡Además, con FitFusion, tienes la libertad de crear y personalizar tus propios ejercicios para adaptar la plataforma a tus necesidades y preferencias específicas!</p>
                    </div>
                </div>
                <div className="w-[380px] h-[378px] md:w-[726px] rounded-[24px] bg-fit-b flex justify-start items-end p-8 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/f8ff/8cd2/b13d1abe87a0b09c334472f107995a5f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aARIUQUga7V-cImKZBhnYVzAq20YvwkSMKLLb0jw1t9vXInW5GAqK~ANppkZBxPFVIbzC32L1w7ohrsxMZwO6U~atUlqmz4tDxFfk1bLlHqhS7c7oaaLyhTKsQ~37SfhF~NeQv38fS02kFYCd0md16FwdmzYjVj4xO~m-Wruz9XDZnte-~hbhZLGw-0QyusxZgUvAr3bZNdtY9uTBDbS9ndFMkt8AZo1v7J1Cbd0bkbGReMnOt0MjUTXsZZ3~SSzpMp7Dm7~ltlZEr8c70gS~xikDMZIT233b9ehE5dqWl6TzfFNRG9AgTF70Uo6t86oA2EI6MvQ6huVlPhY3sH4oA__)' }}>
                    <div className="flex flex-row gap-[12px] justify-between" >
                        <Link to="/routines" className="w-[147px] h-[53px] rounded-[18px] bg-fit-o mb-2 flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Rutinas</Link>
                        <Link to="/routines/insert" className="w-[147px] h-[53px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Crea tu Rutina</Link>

                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[22px] pt-[8px] m-[14px]">
                <div className="h-[268px] w-[396px] rounded-[24px flex flex-col">
                    <div className="w-[396px] h-[202px] rounded-[24px] bg-fit-b bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/9bf1/1e8c/ce46b21b01a20bf640d2f24c8e4cfc8f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfmQvIUg1U~P0a~JwMzmcbEsPRRk-LfAk9iE9QRhV3xQGJEuV92wVGxNkgz5eLK8dPiIpe2rCOevD9SExn82t7lo2eSkh-zCDZxdiAJ4Aox2x4HODfKnhJE3K-73ZvaGdUAHzgPjALy2sc-ZpW0sLPidsoK~d7DSG4kPARtFVPWqaLirgZ-PPZeIy3S-1jZwTDwvydIyCSIpRo71Zpa5Qkm1wsJem7PuMET07ULEkRdByw-NeoG-6MkI1Vqp8tA6aXWypu4NwIZa9n89IDGAt6XW0f~rL8Ekn4It8XUB~m11lDKipt975pnFPYvNtOsL1zMrElrtiYRwtINIg1lNsw__)' }}></div>
                    <div className="flex flex-row justify-between m-[8px]">
                        <Link to="/exercises" className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Ejercicios</Link>
                        <Link to="/exercises/insert" className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Crea tu Ejercicio</Link>
                    </div>
                </div>
                <div className="h-[268px] w-[396px] rounded-[24px flex flex-col">
                    <div className="w-[396px] h-[202px] rounded-[24px] bg-fit-b bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/69b4/16ef/d813e3a7a6f9686b3555ae4e84dbfb8c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Igq0ToRYaf3sbSXBvrAVM5b7an7g5B9ukeFNY1eFkAoczQPMsq7R3nVGANNlv2a4SFSK2yymaFwKn9HjK9StYZPvpkeYUaDGoXE9MzApbZ7T6LN5S2EaIE~bpRMG85v1YXFxvoSClAvgMdWo-9u8IGZTjeAM0dkyobedHIcmoY7aDlRg4AIAn9Y-vGTMKIA~6yOjlqBE6aQSOQE-aGzTuBJVIZLjSxyJCf5ogjnRzFEBv8oNFJs4SaBEIeNobrPLEVuXo0o74MUlICdd4M1yMKzjKie4RHS8kDiZU7Q~egUyi9Mit2hXa1XN8MbB22AwbpMRoXdgHeG2obJXUVQJOQ__)' }}></div>
                    <div className="flex flex-row justify-between m-[8px]">
                        <Link to="/routines" className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Rutinas</Link>
                        <Link to="/routines/insert" className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Crea tu Rutina</Link>
                    </div>
                </div>
                <div className="h-[268px] w-[396px] rounded-[24px flex flex-col ">
                    <div className="w-[396px] h-[202px] rounded-[24px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/3b2d/6ecd/45a965288f215a28bc38014a0c363b61?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlfLFq2ft9kaelHuI4B87TD6iC-LR6ylFDZTIMlUOjbQNLZ195uqv44yLj-E2rPx7YegW2cmWrwV51M~RufynKIkELWeXKx1-T58Bzfh6M1J9o6OHEalNVav3C~YJfaahcgmFAYRKv8-3lA4PJtTDyzEZIDL0D9JD8Qz~sWTwrHZtWdyCeMFvNpr5TJckJeR-tChjF7ksQ-iKnoHAuBXQUmpUVb6~S~72FqTUn2opxzPS99aOexj1kR3JswMGu8qgHXtiOx4Rvz5Su8f-jZJ1KrRFYV5KJH7CBkC90L9xu6Fvz-Eh4IeHFrfvk0N~Sqif8B9oUfKS1OVxizm4dzyBQ__)' }}></div>
                    <div className="flex flex-row justify-center items-center m-[8px]">
                        <Link to="/muscles" className="w-[210px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Músculos</Link>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[22px] pt-[8px] m-[14px] ">
                <div className="w-[396px] md:w-[1224px] p-[24px] h-[214px] rounded-[24px] bg-fit-o flex flex-col md:flex-row md:justify-around">
                    <div className="flex items-center justify-center">
                        <h1 className="text-fit-b font-semibold text-4xl font-archivo">Contacta con nosotros</h1>
                    </div>
                    <div className="flex items-center justify-center gap-[12px]">
                        <input type="email" className="h-[67px] w-[409px] rounded-[18px] bg-fit-w p-[16px] m-[8px]" placeholder="Ingresa tu correo electrónico" value={correo}
                            onChange={(e) => setCorreo(e.target.value)} />
                        <button className="h-[67px] w-[175px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo" onClick={handleEnviar}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyBento