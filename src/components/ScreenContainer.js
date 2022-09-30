import logo from "../assets/img/logo.png"
import styled from "styled-components"
import questions from "./questions"
import { useState } from "react"
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"

export default function ScreenContainer() {
  function Li({ question, numQuestion }) {
    const [pQuestion, setpQustion] = useState(numQuestion)
    const [bgColor, setBgColor] = useState("#FFFFFF")
    const [questionHeigth, setQuestionHeight] = useState("35px")
    const [icon, setIcon] = useState(play)
    const [aling, setAlign] = useState('center')

    return (
      <>
        <ClosedQuestion bg={bgColor} heigth={questionHeigth} align={aling}>
          <p>{pQuestion}</p>
          <img src={icon} alt={'icon'}
            name="play-outline"
            onClick={() => {
              setBgColor("#FFFFD5")
              setQuestionHeight("100px")
              setpQustion(question)
              setIcon(turn)
              setAlign('flex-start')
            }}
          />
        </ClosedQuestion>
      </>
    )
  }


    // const layout = []
    // questions.forEach((e, index) => {
    //   layout.push(<ClosedQuestion bg={bgColor} heigth={questionHeigth}>{e.question}</ClosedQuestion>)
    // })
  


  return (
    <>
      <Screen>
        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>
        <ul>
          
          {questions.map((e, index) => (
            <Li
              key={index}
              question={e.question}
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
  /* width: 100vw; */
  min-height: 100vh;
  display: flex;
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

const ClosedQuestion = styled.li`
  width: 300px;
  height: ${(props) => props.heigth}; 
  background-color: ${(props) => props.bg}; 
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  ion-icon {
    font-size: 30px;
    cursor: pointer;
  }
`

// const OpenQuestion = styled.li`
//   width: 300px;
//   margin: 12px;
//   padding: 15px;
//   min-height: 100px;
//   background: #ffffd5;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
//   border-radius: 5px;
//   font-family: "Recursive";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 22px;
//   color: #333333;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `
