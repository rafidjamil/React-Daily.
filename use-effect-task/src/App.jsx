import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'

import './App.css'
// import { useSearchParams } from 'react-router-dom'

function App() {
  const [activesection, setactivesection] = useState("section1")
  


  

  useEffect(() => {
    const hash = window.location.hash.replace("#","")
    if(hash){
      setactivesection(hash)
    }

  }, [])


  const openSection = (section)=>{
    window.location.hash = (section)
    setactivesection(section)
  }


  return (
    <>


      <div className="container">


        <div className="sidebar">
          <button onClick={() => openSection("section1")}>Section One</button>
          <button onClick={() => openSection("section2")}>Section Two</button>
          <button onClick={() => openSection("section3")}>Section Three</button>
        </div>


        <div className="content">
          {activesection === "section1" &&
            <div className="section">
              <h2>Section One</h2>
              <p>This is the design of section one.</p>
            </div>
          }

          {activesection === "section2" &&
            <div className="section">
              <h2>Section two</h2>
              <p>This is the design of section two.</p>
            </div>
          }

          {activesection === "section3" &&
            <div className="section">
              <h2>Section three</h2>
              <p>This is the design of section three.</p>
            </div>
          }
        </div>

      </div>


    </>
  )
}


export default App
