import styled from "styled-components"

export default function Footer() {
  return (
    <FooterCompleted>
      <ContainerButtons>
        <button className="colorRed">Não lembrei</button>
        <button className="colorYellow">Quase não lembrei</button>
        <button className="colorGreen">Zap!</button>
      </ContainerButtons>
      <h1>0/4 concluídos</h1>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  h1 {
    padding-bottom: 20px;
  }
`

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  margin: 20px;
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

