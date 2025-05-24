import * as SC from "./AppStyled"
import CalcLayout from "./layouts/Calclayout/CalcLayout"

import Header from "./layouts/Header/Header"


function App() {

  return (
    <SC.AppCustom>
      <Header/>
      <CalcLayout/>
    </SC.AppCustom>
  )
}

export default App
