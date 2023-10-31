import 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Navbar()
{

    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
       <div className="container-fluid">
       <Link to="home" className="navbar-brand">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="Movies">Movies</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="Tvshows">Tv Shows</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="gallery">Gallery</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>

        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">

        <li className="nav-item">
          <i className='fa-brands me-3  fa-facebook'></i>
          <i className='fa-brands me-3 fa-instagram'></i>
          <i className='fa-brands me-3 fa-spotify'></i>
          <i className='fa-brands me-3 fa-twitter'></i>

        </li>


        <li className="nav-item">
          <Link className="nav-link" to="Register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
       
        <li className="nav-item">
          <span className="nav-link" >Logout</span>
        </li>

      

        

      </ul>
    </div>
  </div>
</nav>
    </>
}