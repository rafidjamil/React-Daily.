import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import reactvite from './assets/react+vite.png'
import Todolist from './pages/todolist.jsx'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Button />




        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Container />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div class="box">
        < Change />
      </div>
      <Todolist />           
    </>
  )
}


function Change() {
  const [write , setwrite] = useState("")
  const [rewrite , setrewrite] = useState("")
  
  function consoleWrite() {
    console.log(write)
    console.log(rewrite);
    setrewrite(write)
  }

  return <>
    <div class="box">
      <input type="text" value={write} onChange={(w) => setwrite(w.target.value)} placeholder="Write what you to want!!" />
      <button onClick={() => consoleWrite()} >Console it</button>
      <input type="text" value={rewrite}  placeholder="Console Value"/>
    </div>
  </>
}

function Button() {

  var myCounter = 26;

  function increment() {
    myCounter++
    alert()
  }

  return <>

    <div>
      <h1>Direct Variable System</h1>
      <p>Like we do in Vanilla JS.......</p>
      <button onClick={() => increment()}> {myCounter} </button>
    </div>

  </>
}

function Container() {
  return <>
    <p class="info-text">
      My name is <strong>Rafid Jamil</strong>. Currently I am learning <strong>React</strong>.
      React is the JavaSrcipt Libaray and vite is a modern, next-generation frontend build tool and development server.
      Basically react is slow in processing while deleting files, copying files or etc. So thats why we use vite, the combination of vite + react, produce fastness to process.
    </p>
    <img src={reactvite} />

  </>
}



export default App
