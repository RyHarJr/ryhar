import ShowMyIdentify from "./component/ShowMyIdentify"
import Counter from "./component/Counter"
import InputAlert from "./component/InputAlert"
import ChangeBackgroundRandom from "./component/ChangeBackgroundRandom"

const App = () => {
  return (
    <>
    <div>
      <Counter />
      <ShowMyIdentify name="Ahmad Rizki Hartawan" npm="2428240153" github="https://github.com/RyHarJR" />
      <InputAlert />
      <ChangeBackgroundRandom />
    </div>
    </>
  )
}

export default App