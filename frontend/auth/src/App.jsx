import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter ,Routes, Navigate, useNavigate} from 'react-router-dom';
import Login from './Logi';
import Register from './Signu';
import Home from './Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <BrowserRouter > 
<Routes>

<Route path='/register' element={  < Register/>} /> 
<Route path='/login' element={  < Login/>} /> 
<Route path='/' element={  <Home />} /> 

</Routes>
</BrowserRouter>
    </>
  )
}

export default App
