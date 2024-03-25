import './App.css'
import House_Introduce from './components/House_Introduce'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import StartCamping from './components/StartCamping'
import Trend from './components/Trend'
import "./styles/fonts/font.css"

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <MainPage />
      <House_Introduce />
      <StartCamping />
      <Trend />
    </div>
  )
}

export default App
