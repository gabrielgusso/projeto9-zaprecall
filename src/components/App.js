import ScreenContainer from "./ScreenContainer"
import Footer from "./Footer"
import { useState } from "react"
import GlobalStyle from "./globalStyles"

export default function App() {
  const [answerCounter, setAnswerCounter] = useState([])
  return (
    <>
      <GlobalStyle />
      <ScreenContainer
        answerCounter={answerCounter}
        setAnswerCounter={setAnswerCounter}
      />
      <Footer answerCounter={answerCounter} />
    </>
  )
}
