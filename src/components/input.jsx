const Input = ({ name, type, label, value, handleOnchage, handleOnInput }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={name} className='text-sm text-zinc-400'>{label}</label>
            <input type={type} name={name} id={name} value={value} onChange={handleOnchage} onInput={handleOnInput} className='p-3 w-full mb-5 shadow-md border-2 rounded-md bg-white'/>
        </div>
    )
}

export default Input
