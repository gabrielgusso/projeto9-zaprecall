import styled from "styled-components"
import questions from "./questions"

export default function Footer({ answerCounter, displayComponents }) {
  return (
    <FooterCompleted displayComponents={displayComponents}>
      <h1>
        {answerCounter.length}/{questions.length} concluídos
      </h1>
      <Icons>
        {answerCounter.map((e) => (
          <img src={e} alt="icon" />
        ))}
      </Icons>
    </FooterCompleted>
  )
}

const FooterCompleted = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  display: ${porps => porps.displayComponents};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  h1 {
    padding-bottom: 10px;
    padding-top: 20px;
  }
`
const Icons = styled.div`
  display: flex;
  margin-bottom: 10px;
  img {
    margin-left: 5px;
  }
`
