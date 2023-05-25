import './App.css'
import Main from './pages/Main'
import Drive from './pages/Drive'
import Firebase from './pages/Firebase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/drive' element={<Drive/>} />
      <Route path='/firebase' element={<Firebase/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
