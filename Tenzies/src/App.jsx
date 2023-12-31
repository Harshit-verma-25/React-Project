import React from "react"
import Die from './components/Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    // console.log(allHeld)
    const firstValue = dice[0].value
    // console.log(firstValue)
    const allSameValue = dice.every(die => die.value === firstValue)
    // console.log(allSameValue)
    
    if(allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map( die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
  const diceElements = dice.map(die => (
    <Die key={die.id} 
    value={die.value}
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}
    />
  ))

  function rollDice() {
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    }
    else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.<br/>
      Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {diceElements}
      </div>
      <button className="dice-roll" onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  )
}