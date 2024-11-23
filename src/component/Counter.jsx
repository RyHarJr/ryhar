import { useState, useEffect } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Counter: ${count}`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Change counter {count} clicked</button>
    </div>
  )
}

export default Counter