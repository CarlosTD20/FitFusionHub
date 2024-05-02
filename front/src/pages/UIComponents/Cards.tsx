import { Link } from "react-router-dom";

interface CardProps {
    imageUrl: string;
    text: string;
    link: string;
}

const Cards: React.FC<CardProps> = ({ imageUrl, text, link }) => {
    return (
        <Link to={link} className="h-[202px] w-[396px] rounded-[24px] bg- backdrop-blur" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="flex flex-col w-full h-full rounded-[24px] p-[24px] bg-gray-600 bg-opacity-40 transition duration-300 hover:bg-opacity-60 justify-end items-start">
                <p className="text-white text-2xl font-archivo text-left">{text}</p>
            </div>
        </Link>
    );
};

export default Cards;