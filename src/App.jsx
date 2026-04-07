import { Routes, Route, Navigate } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Welcome from './pages/Welcome.jsx'
import AnswerQuestions from './pages/AnswerQuestions.jsx'
import Workshop from './pages/Workshop.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <NavigationBar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/answer" element={<AnswerQuestions />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
