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
                            ¡Descubre FitFusion y comienza a mejorar tu condición física! Nuestra plataforma web te ofrece una amplia variedad de entrenamientos físicos. ¡Además, con FitFusion, tienes la libertad de crear y personalizar tus propios ejercicios para adaptar la plataforma a tus necesidades y preferencias específicas!</p>
                    </div>
                </div>
                <div className="w-[380px] h-[378px] md:w-[726px] rounded-[24px] bg-fit-b flex justify-start items-end p-8 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="flex flex-row gap-[12px] justify-between" >
                        <Link to="/routines" className="w-[147px] h-[53px] rounded-[18px] bg-fit-o mb-2 flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Rutinas</Link>
                        <Link to="/routines/insert" className="w-[147px] h-[53px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Crea tu Rutina</Link>

                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[22px] pt-[8px] m-[14px]">
                <div className="h-[268px] w-[396px] rounded-[24px flex flex-col">
                    <div className="w-[396px] h-[202px] rounded-[24px] bg-fit-b bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/9bf1/1e8c/ce46b21b01a20bf640d2f24c8e4cfc8f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZuPFcopwNQMyqAKWwzGxabREyzZ6Rh7d-P7RSwcLbFwZpGEiG9QuGY2VCMLHgVCNR-E3pXEMMc0lNqD21OZ0DmlRX2YvjCp03i149TBN0NjxZU19mS8Df5nYAtIfv9AuXI-XYefSJFk5bL2sLyYUUi~ON2TsLVnmcgnOgRlDcuTNnYA6qN4obgGDcuU-QvUX60v0tdyw98y8biJktdNbtIw2Lro92eouvqW~c-qKTqcqL6zhooQWXCtvQCsOD3n~qywAE-vzGhckiLWHKGzfjL0t57IungP3MLa4t9X8FeLNOKInQZnIgu2dvltaKrBwBYCcut3oLkiUKbCzeqw2Ag__)' }}></div>
                    <div className="flex flex-row justify-between m-[8px]">
                        <Link to="/exercises" className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Ejercicios</Link>
                        <Link to="/exercises/insert" className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Crea tu Ejercicio</Link>
                    </div>
                </div>
                <div className="h-[268px] w-[396px] rounded-[24px flex flex-col">
                    <div className="w-[396px] h-[202px] rounded-[24px] bg-fit-b bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/69b4/16ef/d813e3a7a6f9686b3555ae4e84dbfb8c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lR5aopgU6hzCXNJUS-xvQ4vqZrZaRCYJ2WeHx1Un2ycQL~~rt97Oa29e7dajvBT1K~3sK~BjRhrcS2ppJOpz2~4An0J8aNWKVQBnX-TqsDlFWELpDZ1LOm4ZS5SuoVlmCXWf-Q055krH5eyW1X~cK6xnCZLqoK38bK4P9h827e2jlF5ND6ThTbDByKc-kilfr2juV7ZY1Ilsk066QBBE9q2wnTYNb9vyyGvXIjjnO~JcsiFTVt3OS-ZynKnx7PYwD3cz2UsemxwqkL2YU55SugohZivrOzsHbolA2jAXu4QKJQUcqA8xowwt5FLbnW-7kbv5nEwxiZ-pGuLYzfRzHQ__)' }}></div>
                    <div className="flex flex-row justify-between m-[8px]">
                        <Link to="/routines" className="w-[153px] h-[56px] rounded-[18px] bg-fit-o flex items-center justify-center text-fit-b font-semibold font-archivo">Ver Rutinas</Link>
                        <Link to="/routines/insert" className="w-[153px] h-[56px] rounded-[18px] bg-fit-b flex items-center justify-center text-white font-semibold font-archivo">Crea tu Rutina</Link>
                    </div>
                </div>
                <div className="h-[268px] w-[396px] rounded-[24px flex flex-col ">
                    <div className="w-[396px] h-[202px] rounded-[24px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
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