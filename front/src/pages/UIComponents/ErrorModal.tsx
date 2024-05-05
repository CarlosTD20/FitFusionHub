interface ErrorModalProps {
    errorMessage: string
    onClose: () => void
}

const ErrorModal: React.FC<ErrorModalProps> = ({ errorMessage, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
                <div className="w-[300px] rounded-[18px] bg-fit-r mb-4 text-fit-b font-bold bg-opacity-50 border border-fit-r">
                    <p className="text-center px-4 py-2 my-4">{errorMessage}</p>
                </div>
                <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-md">Cerrar</button>
            </div>
        </div>
    )
}

export default ErrorModal