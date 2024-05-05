import { Link } from "react-router-dom";

export enum CardSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

interface CardProps {
    imageUrl: string;
    text: string;
    link: string;
    size?: CardSize; // Tamaño opcional
}

const Cards: React.FC<CardProps> = ({ size = CardSize.MEDIUM, imageUrl, text, link,  }) => {
    // Determinar los estilos en función del tamaño
    const getSizeStyles = (size: CardSize) => {
        switch (size) {
            case CardSize.SMALL:
                return "w-[334px] h-[79px] rounded-[14px]";
            case CardSize.MEDIUM:
                return "w-[396px] h-[202px] rounded-[24px]";
            case CardSize.LARGE:
                return "w-[500px] h-[300px] rounded-[30px]";
            default:
                return "w-[396px] h-[202px] rounded-[24px]"; // Tamaño medio por defecto
        }
    };

    return (
        <Link to={link} className={`block ${getSizeStyles(size)} bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="flex flex-col w-full h-full rounded-[24px] p-[24px] bg-gray-600 bg-opacity-40 transition duration-300 hover:bg-opacity-60 justify-end items-start">
                <p className="text-white text-2xl font-archivo text-left">{text}</p>
            </div>
        </Link>
    );
};

export default Cards;
