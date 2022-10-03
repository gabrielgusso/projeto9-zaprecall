import { useState } from "react"
import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function HomeScreen({ setDisplaComponents }) {
  const [displayHome, setDIsplayHome] = useState("flex")
  return (
    <HomeScreendiv displayHome={displayHome}>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <button
        onClick={() => {
          setDisplaComponents("flex")
          setDIsplayHome("none")
        }}
      >
        Inicial Recall!!
      </button>
    </HomeScreendiv>
  )
}

const HomeScreendiv = styled.div`
  background-color: #fb6b6b;
  min-height: 100vh;
  display: ${(props) => props.displayHome};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-top: 20px;
  }
  button {
    width: 250px;
    height: 50px;
    border: 1px solid #ff3030;
    border-radius: 5px;
    color: #ff3030;
    font-family: "Recursive";
    font-weight: 700;
    font-size: 16px;
    margin-top: 20px;
    box-shadow: 0px 3px 10px black;
    cursor: pointer;
  }
`
