import { useState } from 'react'
import Input from './input'

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
            alert('Ingrese dos fechas validas')
            return null
        }

        setdiasBetween(calcularDiasAusencia(dateIni, dateEnd))
    }

    return (
        <>
            <form onSubmit={handleOnSubmit} className="w-full h-auto flex flex-col items-center md:max-w-xl ">
                <Input name='ini-date' type='date' label='Initial date' value={dateIni} handleOnInput={handleOnchange} />
                <Input name='fin-date' type='date' label='Final date' value={dateEnd} handleOnInput={handleOnchange} />
                <button className='w-2/5 h-14 border-2 my-5 bg-zinc-700 text-white text-2xl rounded-md shadow-md hover:bg-zinc-500'>Send</button>
            </form>
            <h2 className='m-5 p-3'>Diferencia en días: {diasBetween}</h2>
        </>
    )
}

export default BetweenDates
