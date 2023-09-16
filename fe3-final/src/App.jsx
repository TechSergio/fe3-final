
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import { useDentStates } from "./Context/Context";


function App() {
  const {state} = useDentStates()
  const containerClass = state.theme ? '' : 'dark';


  return (
      <div className={`App ${containerClass}`}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favs' element={<Favs/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
