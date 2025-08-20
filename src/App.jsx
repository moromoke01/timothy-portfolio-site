import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main_section from './landingpage/main_section'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// import Side_section from './landingpage/side_section'


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Side_section />} /> */}
        <Route path="/" element={<Main_section />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
