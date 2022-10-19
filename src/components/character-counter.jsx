import { useState } from 'react'
import Input from './input'
import Alert from './Alert'

const CharacterCounter = () => {
    const [textCount, setTextCount] = useState('')
    const [cantChar, setCantChar] = useState(0)
    const [res, setRes] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('Enter text')

    const handleOnchange = (event) => {
        event.preventDefault()
        setTextCount(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        if (!textCount) {
            setMsgAlert('Enter text')
            setShowAlert(true)
            return null
        }
        setShowAlert(false)
        setRes(true)
        setCantChar(textCount.length)
    }

    const handleReset = () => {
        setTextCount('')
        setRes(false)
        setShowAlert(false)
    }

    return (
        <>
            <Alert message={msgAlert} hidden={showAlert} />
            <div className="w-full h-full flex flex-col items-center md:max-w-xl ">
                <textarea name="text-count" id="text-count" onInput={handleOnchange} placeholder='Enter text...' value={textCount} className='resize-y w-full h-2/5 min-h-[30%] my-3 shadow-md rounded-md p-3 md:w-4/5'></textarea>
                <div className='w-full flex justify-center flex-wrap-reverse md:flex-wrap'>
                    <button onClick={handleReset} className='w-full h-14 border-2 m-5 bg-red-600 text-white text-2xl rounded-md shadow-md hover:bg-red-400 sm:w-2/5'>Reset</button>
                    <button onClick={handleOnSubmit} type='submit' className='w-full h-14 border-2 m-5 bg-cyan-600 text-white text-2xl rounded-md shadow-md hover:bg-cyan-400 sm:w-2/5'>Send</button>
                </div>
                {
                    (res) ? <h2 className='m-5 p-3 w-full bg-white shadow-md rounded-md text-center lg:w-4/5'>Number of characters: {cantChar}</h2> : ''
                }
            </div>
        </>
    )
}

export default CharacterCounter
