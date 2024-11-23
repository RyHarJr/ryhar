import { useState, useEffect } from "react"

function InputAlert() {
  const [inputAlert, setInputAlert] = useState("")
  const handleInputChange = (event) => {
      setInputAlert(event.target.value)
  }
  const handleSubmit = () => {
      alert(`Halo ${inputAlert}`)
  }
  return (
    <div>
      <input type="text" name="inputAlert" value={inputAlert} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InputAlert