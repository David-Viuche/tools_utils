import { useState } from 'react'
import './Form.css'

const calcularDiasAusencia = (fechaIni, fechaFin) => {
    var diaEnMils = 1000 * 60 * 60 * 24,
        desde = new Date(fechaIni.substr(0, 10)),
        hasta = new Date(fechaFin.substr(0, 10)),
        diff = hasta.getTime() - desde.getTime() + diaEnMils;// +1 incluir el dia de ini
    return diff / diaEnMils;
}

const Form = () => {

    const [dateInit, setDateInit] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [diasBetween, setdiasBetween] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!dateEnd || !dateInit){
            alert('Ingrese dos fechas validas')
            return null
        }

        setdiasBetween(calcularDiasAusencia(dateInit, dateEnd))
    }

    const handleOnchange = (event) => {
        event.preventDefault()
        setDateInit(event.target.value)
    }

    const handleOnchange2 = (event) => {
        event.preventDefault()
        setDateEnd(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="date" name="date-init" id="date-init" value={dateInit || ''} onChange={handleOnchange} />
                <input type="date" name="date-end" id="date-end" value={dateEnd || ''} onChange={handleOnchange2} />
                <button>Calcular</button>
            </form>
            <h2>Diferencia en días: {diasBetween}</h2>
        </div>
    )
}

export default Form
