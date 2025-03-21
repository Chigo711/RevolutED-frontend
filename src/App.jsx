import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LearningHubPage from './pages/learning/LearningHubPage';

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path ="learning" element={<LearningHubPage />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App
