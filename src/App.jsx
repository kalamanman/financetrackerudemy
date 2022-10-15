import {BrowserRouter,Routes,NavLink,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import LogIn from './pages/logIn/LogIn'
import SignUp from './pages/signUp/SignUp'

function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='*' element={<><h1> page not found status 404</h1></>}/>
         </Routes>
        </BrowserRouter>
      </div>

    
  )
}

export default App
