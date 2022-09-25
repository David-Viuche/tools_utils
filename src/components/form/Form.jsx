import { useState } from 'react'
import './Form.css'

const Form = () => {

    const [dateInit, setDateInit] = useState('')
    const [dateEnd, setDateEnd] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("subtmit", dateInit, dateEnd)
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
                <input type="date" name="date-init" id="date-init" value={dateInit || ''} onChange={handleOnchange}/>
                <input type="date" name="date-end" id="date-end"  value={dateEnd || ''} onChange={handleOnchange2}/>
                <button>Calcular</button>
            </form>
        </div>
    )
}

export default Form
