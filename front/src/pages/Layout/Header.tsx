import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="m-[14px] flex flex-col items-center justify-center gap-[22px] pt-[8px] md:flex-row ">
            <div className="left-[28px] flex h-[76px] w-[100%] max-w-[1042px] flex-row rounded-[24px] border-gray-400 bg-fit-w px-[12px] py-[8px] shadow">
                <Link to="/" className="left-[64px] h-[24px] w-[324px] pl-[24px]">
                    <span className="text-fit-b text-[38px] font-600 font-archivo font-bold">Fit</span>
                    <span className="text-fit-o text-[38px] font-600 font-archivo font-bold">Fusion</span>
                </Link>
            </div>
            <div className="h-[67px] w-[175px] rounded-[18px] bg-fit-o"></div>
        </div>
    )
}

export default Header