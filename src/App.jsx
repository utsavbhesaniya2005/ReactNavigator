import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'
import './assets/css/all.min.css'
import './assets/css/font.css'
import './App.css'
import './assets/css/media.css'
import { Route, Routes } from 'react-router'
import EventDetails from './pages/eventDetails'
import LatestBlogGrid from './pages/LatestBlogGrid'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/event' element={<EventDetails /> }></Route>
        <Route path='/blog' element={<LatestBlogGrid /> }></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
