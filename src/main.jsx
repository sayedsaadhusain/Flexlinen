import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import SignInSignUp from './component/auth/SignInSignUp.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <Login /> */}
    {/* <SignInSignUp/> */}
    <App />
    </BrowserRouter>,
)
