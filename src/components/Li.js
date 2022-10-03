import { useState } from "react"
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"
import iconGreen from "../assets/img/icone_certo.png"
import iconYellow from "../assets/img/icone_quase.png"
import iconRed from "../assets/img/icone_erro.png"
import styled from "styled-components"

export default function Li({
  question,
  numQuestion,
  aswer,
  answerCounter,
  setAnswerCounter,
  displayComponents,
}) {
  const [clickedQuestion, setClickedQuestion] = useState([])
  const [seeAnswer, setSeeAnswer] = useState([])
  const [colorAnswer, setColorAnswer] = useState([])

  if (colorAnswer.questionObj === numQuestion) {
    const { color, nameColor } = colorAnswer
    if (nameColor === "red") {
      return (
        <AnsweredQuestion color={color}>
          <p>{numQuestion}</p>
          <img src={iconRed} alt="icon" />
        </AnsweredQuestion>
      )
    }
    if (nameColor === "yellow") {
      return (
        <AnsweredQuestion color={color}>
          <p>{numQuestion}</p>
          <img src={iconYellow} alt="icon" />
        </AnsweredQuestion>
      )
    }
    if (nameColor === "green") {
      return (
        <AnsweredQuestion color={color}>
          <p>{numQuestion}</p>
          <img src={iconGreen} alt="icon" />
        </AnsweredQuestion>
      )
    }
  }

  if (seeAnswer[0] === numQuestion) {
    return (
      <OpenQuestion>
        <p>{aswer}</p>
        <ContainerButtons>
          <button
            className="colorRed"
            onClick={() => {
              setColorAnswer({
                questionObj: numQuestion,
                color: "#FF3030",
                nameColor: "red",
              })
              setAnswerCounter([...answerCounter, iconRed])
            }}
          >
            Não lembrei
          </button>
          <button
            className="colorYellow"
            onClick={() => {
              setColorAnswer({
                questionObj: numQuestion,
                color: "#FF922E",
                nameColor: "yellow",
              })
              setAnswerCounter([...answerCounter, iconYellow])
            }}
          >
            Quase não lembrei
          </button>
          <button
            className="colorGreen"
            onClick={() => {
              setColorAnswer({
                questionObj: numQuestion,
                color: "#2FBE34",
                nameColor: "green",
              })
              setAnswerCounter([...answerCounter, iconGreen])
            }}
          >
            Zap!
          </button>
        </ContainerButtons>
      </OpenQuestion>
    )
  }

  if (clickedQuestion[0] === numQuestion) {
    return (
      <OpenQuestion>
        <p>{question}</p>
        <img
          src={turn}
          alt="icon"
          onClick={() => {
            setSeeAnswer([numQuestion])
          }}
        />
      </OpenQuestion>
    )
  }

  return (
    <>
      <ClosedQuestion
        displayComponents={displayComponents}
        onClick={() => {
          if (clickedQuestion.length === 0) {
            setClickedQuestion([numQuestion])
          }
        }}
      >
        <p>{numQuestion}</p>
        <img src={play} alt="icon" name="play-outline" />
      </ClosedQuestion>
    </>
  )
}

const ClosedQuestion = styled.li`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => props.displayComponents};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`

const OpenQuestion = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`
const AnsweredQuestion = styled.li`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    text-decoration: line-through;
  }
`

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  margin-top: 20px;
  justify-content: space-around;

  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
  .colorGreen {
    background-color: #2fbe34;
  }
  .colorYellow {
    background-color: #ff922e;
  }
  .colorRed {
    background-color: #ff3030;
  }
`
