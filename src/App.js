import './App.css';
import './index.css';
import Footer from './components/Footer';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import HallOfFrames from './components/HallOfFrames';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Me from './components/About components/Me';
import Education from './components/About components/Education';
import Skills from './components/About components/Skills';


function App() {
  return (
    <div className='w-full h-screen bg-no-repeat bg-gradient-to-tl from-[#0c0c0c] via-neutral-900 to-black bg-fixed flex flex-col'>
      <Search />

      <Router>

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/About/' element={<About />}>
            <Route path='Me' element={<Me />} />
            <Route path='Education' element={<Education />} />
            <Route path='Skills' element={<Skills />} />
          </Route>
          <Route path='Contact' element={<Contact />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='HallOfFrames' element={<HallOfFrames />} />
          <Route path='*' element={<Error/>} />
        </Routes>

        <Navbar />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
