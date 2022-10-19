import { useState } from 'react'
import Input from './input'
import Alert from './Alert'

const calcularDiasAusencia = (fechaIni, fechaFin) => {
    var diaEnMils = 1000 * 60 * 60 * 24,
        desde = new Date(fechaIni.substr(0, 10)),
        hasta = new Date(fechaFin.substr(0, 10)),
        diff = hasta.getTime() - desde.getTime() + diaEnMils;// +1 incluir el dia de ini
    return diff / diaEnMils;
}

const BetweenDates = () => {
    const [dateIni, setDateIni] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [diasBetween, setdiasBetween] = useState('')
    const [res, setRes] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('Enter two valid dates')

    const handleOnchange = (event) => {
        event.preventDefault()

        if (event.target.name === 'ini-date') {
            setDateIni(event.target.value)
        }

        if (event.target.name === 'fin-date') {
            setDateEnd(event.target.value)
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        if (!dateEnd || !dateIni) {
            setMsgAlert('Enter two valid dates')
            setShowAlert(true)
            return null
        }
        setShowAlert(false)
        setRes(true)
        setdiasBetween(calcularDiasAusencia(dateIni, dateEnd))
    }

    const handleReset = () => {
        setDateEnd('')
        setDateIni('')
        setRes(false)
        setShowAlert(false)
    }

    return (
        <>
            <Alert message={msgAlert} hidden={showAlert}/>
            <div className="w-full h-auto flex flex-col items-center md:max-w-xl ">
                <Input name='ini-date' type='date' label='Initial date' value={dateIni} handleOnInput={handleOnchange} />
                <Input name='fin-date' type='date' label='Final date' value={dateEnd} handleOnInput={handleOnchange} />
                <div className='w-full flex justify-center flex-wrap'>
                    <button onClick={handleReset} className='w-full h-14 border-2 m-5 bg-red-600 text-white text-2xl rounded-md shadow-md hover:bg-red-400 sm:w-2/5'>Reset</button>
                    <button onClick={handleOnSubmit} type='submit' className='w-full h-14 border-2 m-5 bg-cyan-600 text-white text-2xl rounded-md shadow-md hover:bg-cyan-400 sm:w-2/5'>Send</button>
                </div>
            </div>
            {
                (res) ? <h2 className='m-5 p-3'>Diferencia en días: {diasBetween}</h2> : ''
            }
        </>
    )
}

export default BetweenDates
