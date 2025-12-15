import {React, useState} from 'react'
import CarouselDefault from '../../components/uiComponents/CarouselDefault'
import AuthCard from './AuthCard'
import ForgotPasswordCard from './ForgotPasswordCard'


const AuthPage = () => {
  const [view, setView] = useState("login"); // "login" | "forgot"
  
  return (
    <div className='grid grid-cols-5 h-screen'>
      <div className='col-span-3 bg-amber-100 '>
        <CarouselDefault/>

      </div>
      <div className='col-span-2'>
      {view === "login" && (
        <AuthCard
          onLogin={() => alert("Login...")}
          onGoogleLogin={() => alert("Google login...")}
          onShowForgot={() => setView("forgot")}
        />
      )}
      {view === "forgot" && (
        <ForgotPasswordCard
          onReset={() => alert("Reset link sent (mock)...")}
          onBack={() => setView("login")}
        />
      )}
      </div>
    </div>
  )
}

export default AuthPage
