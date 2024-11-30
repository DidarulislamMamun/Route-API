
import './App.css'
import About from './pages/About'
import Header from './pages/Header'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router';
import Products from './pages/Products';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Products' element={<Products />}></Route>
    </Routes>
    </BrowserRouter>
    
      
      
    </>
  )
}

export default App
