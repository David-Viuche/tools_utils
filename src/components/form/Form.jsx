import './Form.css'

const Form = () => {

  return (
    <div>
        <form>
            <input type="date" name="date-init" id="date-init" />
            <input type="date" name="date-end" id="date-end" />
            <button>Calcular</button>
        </form>
    </div>
  )
}

export default Form
