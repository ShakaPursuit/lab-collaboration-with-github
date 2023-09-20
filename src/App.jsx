import { useState } from 'react'


import './App.css'
import { Row, Col } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  const Shaka = document.querySelector('div.player1')

  const [playerTrue, SetPlayerTrue] = useState("Attack!💫")
  const [playerFalse, SetPlayerFalse] = useState([])
  const [reallyTrue, SetReallyTrue] = useState("true✅")
  const [reallyFalse, SetReallyFalse] = useState("false❌")
  const [reallyTrue2, SetReallyTrue2] = useState("true✅")
  const [reallyFalse2, SetReallyFalse2] = useState("false❌")
  const [hitPoints, SetHitPoints] = useState(30)
  const [hitPoints2, SetHitPoints2] = useState(30)
  const [win, SetWin] = useState(0)


  //   const[p1,Setp1]=useState(

  // {
  //     name: "Shaka",
  //     color: "orchid",
  //     hitpoints: hitPoints,
  //     turn: reallyTrue,

  // });

  // const[p2,Setp2]=useState(

  // {
  //     name: "Jamal",
  //     color: "cornflowerblue",
  //     hitpoints: '100',
  //     turn:reallyFalse2,
  //   });

  const dice = 0;

  // const player1Turn = true;

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;

      default:

        break;

    }
  }

  function showPrompt() {
    const message = "Game Over! Your score is 0. Play again?";

    return message
  }
  const handleShaka = (e) => {
    e.preventDefault()

    const ShakasGo = document.querySelector("button.Shaka")
    const JamalsGo = document.querySelector('button.Jamal')






    const ShakasValue = SetHitPoints(hitPoints - Math.floor(Math.random() * 10))

    // const Shak= document.querySelector('h2.Shaka').textContent
    SetReallyTrue(reallyFalse)
    SetReallyFalse2(reallyTrue2)
    SetWin(ShakasValue)

    ShakasGo.setAttribute("hidden", "hidden")
    JamalsGo.removeAttribute("hidden")

    if (hitPoints <= 0) {

      prompt('You WINNNNN  Shaka 🤣')
    }






  }


  const handleJamal = (e) => {
    e.preventDefault()

    const ShakasGo = document.querySelector("button.Shaka")
    const JamalsGo = document.querySelector('button.Jamal')

    const JamalsValue = SetHitPoints2(hitPoints2 - Math.floor(Math.random() * 10))
    SetReallyTrue(reallyTrue2)
    SetReallyFalse2(reallyFalse)
    //  SetWin(JamalsValue)





    JamalsGo.setAttribute("hidden", "hidden")
    ShakasGo.removeAttribute("hidden")
    if (hitPoints2 <= 0) {

      prompt('You WINNNNN Jamal  💫')
    }









  }
  const flipButton = () => {

    const [isFLipped, setIsFLipped] = useState(false);

    const handleFlip = () => {


      setIsFLipped(!isFLipped);

    };

    return (<><div>


      <button onClick={handleFlip}>{playerTrue}</button>

      {isFLipped ? <div>{playerTrue}</div> : <div>{playerFalse}</div>}


    </div>
    </>);



  }


  const flipButton2 = () => {

    const [isFLipped, setIsFLipped] = useState(false);

    const handleFlip = () => {


      setIsFLipped(!isFLipped);

    };

    return (<><div>


      <button onClick={handleFlip}>{playerTrue}</button>

      {isFLipped ? <div>{playerFalse}</div> : <div>{playerTrue}</div>}


    </div>
    </>);



  }







  return (
    <>
      <div className='border'>
        <div>
          <header>
            <h1>Color Battle !</h1>


          </header>
        </div>
        <>

          <h1>Shaka</h1>

        </>


        <div className='p1'>




          <h2 className='Shaka'>{hitPoints}</h2>
          <h2>My Turn= {reallyTrue}</h2>

          <div className='player1'></div>
          <button className="Shaka" onClick={handleShaka}>Attack!💫</button>


        </div>
      </div>
      <div className='border2'>

        <h1>Jamal</h1>

        <div className='p2'>



          <h2 className='Jamal'>HitPoints:{hitPoints2}</h2>
          <h2>My turn = {reallyFalse2}</h2>

          <div className='player2'>



            <button className='Jamal' hidden="hidden" onClick={handleJamal}>Attack!💫</button>
          </div>



        </div>
      </div>




















      <div className="card">
        <button onClick={() => setCount((count) => count + 4)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
