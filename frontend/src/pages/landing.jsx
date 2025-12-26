import React from 'react'
import "../App.css"

export default function LandingPage() {
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>Video Call by Priyanshu</h2>
        </div>
        <div className='navlist'>
          <p>Join as Guest</p>
          <p>Register</p>
          <div role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className='landingMainContainer'>
        <div>
          <h1><span style={{color: "#f89839"}}>Connect</span> with your loved Ones</h1>
          <p>Meet your loved Ones by Video Call</p>
        </div>
        <div>
          <img src='/gutka.png' alt='' className="mobileImage"></img>
        </div>
      </div>
    </div>
  )
}
