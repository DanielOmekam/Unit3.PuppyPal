import {puppyList} from './data.js'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dog, setDog] = useState("");
  console.log(dog);
 


  return (
    <>
      <div className = "Puppy">
        <h3>Name:{dog.name}</h3>
        <p>Age: {dog.age} <br></br> Email: {dog.email}</p>
        </div>
        {puppyList.map((puppy, idx) => {
          return(
            <p key={idx} onClick={() => setDog(puppy)} >
              {puppy.name}
              </p>

          );
        })}
      

      <div>
        <a href="https://vitejs.dev" target="_blank">
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
