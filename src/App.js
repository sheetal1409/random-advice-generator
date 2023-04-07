import React from "react"
import './App.css';

function App() {
  const [advice, setAdvice] = React.useState('')
  const [diceClicked, setDiceClicked] = React.useState(false)


  function getAdvice() {
    setDiceClicked(true)
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }
  console.log(advice)
  return (
    <div className="App">

      <div className="advice-section">    {diceClicked && <p className="advice-id">Advice #{advice.id}</p>}
        {!diceClicked && <p>Click on dice to get a free advice!!! </p>}
        {diceClicked && <p className="advice">"{advice.advice}"</p>}</div>
      <div className="pattern-divider"></div>

      <div className="dice-box" onClick={getAdvice}><div className="dice"></div></div>

    </div>
  );
}

export default App;
