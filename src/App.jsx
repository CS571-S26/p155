import { Routes, Route, Navigate } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Welcome from './pages/Welcome.jsx'
import AnswerQuestions from './pages/AnswerQuestions.jsx'
import Stats from './pages/Stats.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <NavigationBar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/answer" element={<AnswerQuestions />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/workshop" element={<Navigate to="/stats" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
