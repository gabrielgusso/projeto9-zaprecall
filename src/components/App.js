import ScreenContainer from "./ScreenContainer"
import Footer from "./Footer"
import { useState } from "react"
import GlobalStyle from "./globalStyles"
import HomeScreen from "./Homescreen"

export default function App() {
  const [answerCounter, setAnswerCounter] = useState([])
  const [displayComponents, setDisplaComponents] = useState("none")
  return (
    <>
      <GlobalStyle />
      <HomeScreen 
      setDisplaComponents={setDisplaComponents}
      />
      <ScreenContainer
        answerCounter={answerCounter}
        setAnswerCounter={setAnswerCounter}
        displayComponents={displayComponents}
      />
      <Footer answerCounter={answerCounter} 
      displayComponents={displayComponents}
      />
    </>
  )
}
