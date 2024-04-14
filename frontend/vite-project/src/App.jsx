import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Login from './components/Login';
import Parent from './components/Parent';

function App() {
  return (
    <>
    <Router>
         <Toaster/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/parent' element={<Parent/>}/>
            </Routes>
      </Router>
  
    </>
  )
}

export default App