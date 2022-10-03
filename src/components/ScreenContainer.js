import logo from "../assets/img/logo.png"
import styled from "styled-components"
import questions from "./questions"
import Li from "./Li"

export default function ScreenContainer({
  answerCounter,
  setAnswerCounter,
  displayComponents,
}) {
  return (
    <>
      <Screen displayComponents={displayComponents}>
        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>
        <ul>
          {questions.map((e, index) => (
            <Li
              answerCounter={answerCounter}
              setAnswerCounter={setAnswerCounter}
              key={index}
              question={e.question}
              aswer={e.answer}
              displayComponents={displayComponents}
              numQuestion={"Pergunta " + (index + 1)}
            />
          ))}
        </ul>
      </Screen>
    </>
  )
}

const Screen = styled.div`
  background-color: #fb6b6b;
  min-height: 100vh;
  display: ${(props) => props.displayComponents};
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`
