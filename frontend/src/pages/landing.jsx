import React from 'react'
import "../App.css"
import { Route ,Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const router = useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>Video Call App by Priyanshu</h2>
        </div>
        <div className='navlist'>
          <p onClick={()=>{
            router("/hgfy")
          }}>Join as Guest</p>
          <p onClick={()=>{
            router("/auth")
          }}>Register</p>
          <div onClick={()=>{
            router("/auth")
          }} role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className='landingMainContainer'>
        <div>
          <h1><span style={{color: "#f89839"}}>Connect</span> with your loved Ones</h1>
          <p>Meet your loved Ones by Video Call</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src='/gutka.png' alt='' className="mobileImage"></img>
        </div>
      </div>
    </div>
  )
}
