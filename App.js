import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import {Routes ,Route} from 'react-router-dom';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import Login from './Components/LogIn/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import Movies from './Components/Movies/Movies';
import Tvshows from './Components/Tvshows/Tvshows';
import MovieDetails from './Components/MovieDetails/MovieDetails';



function App() {
  return <>
    <Navbar/>
    
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="gallery" element={<Gallery/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="Register" element={<Register/>}/>
      <Route path="Movies" element={<Movies/>}/>
      <Route path="Tvshows" element={<Tvshows/>}/>
      <Route path="MovieDetails" element={<MovieDetails/>}>
        <Route path=":id" element={<MovieDetails/>}/>
        </Route>

      <Route path="*" element={<Notfound/>}/>
    </Routes>
  </>
}

export default App;
