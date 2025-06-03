import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import FlappyRick from './pages/game-pages/FlappyRick/FlappyRick'
import Games from './pages/game-pages/Games'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/games" element={<Games />} />
          <Route path="/flappyrick" element={<FlappyRick />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
