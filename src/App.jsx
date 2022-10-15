import {BrowserRouter,Routes,NavLink,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import LogIn from './pages/logIn/LogIn'
import SignUp from './pages/signUp/SignUp'

function App() {
  

  return (
    <div className="App  min-vh-100 min-vw-100 bg-info   text-center">
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
         </Routes>
        </BrowserRouter>
      </div>

    
  )
}

export default App
