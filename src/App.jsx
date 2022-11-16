import {BrowserRouter,Routes,NavLink,Route,Navigate} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/home/Home'
import LogIn from './pages/logIn/LogIn'
import SignUp from './pages/signUp/SignUp'

function App() {
     
     const {user,authIsReady} = useAuthContext()
  return (
    <div  className="App">

      {authIsReady && (
        <div className='container'>
        <BrowserRouter>
        <Navbar/>
         <Routes>
           <Route path='/' element={user?<Home/>:<Navigate to ='/login'/>} /> 
          <Route path='/login' element={!user?<LogIn/>:<Navigate to='/'/>} />
          <Route path='/signup' element={!user?<SignUp/>:<Navigate to ='/'/>} />
          <Route path='*' element={<><h1> page not found status 404</h1></>}/>
         </Routes>
        </BrowserRouter>
        </div>
      )}
      
      </div>

    
  )
}

export default App
