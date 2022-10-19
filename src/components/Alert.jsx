const Alert = ({message, hidden}) => {

    if(hidden) {
        return <div className="w-full h-10 border-2 flex flex-col items-center justify-center border-red-700 bg-red-400 text-white rounded-md text-lg">
            {message}
        </div>
    }

    return ''
}

export default Alert