import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ViewListIcon from '@mui/icons-material/ViewList';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink to="/Home" exact>
        <img src='https://zupimages.net/up/21/49/qeog.png' className='logo'></img>
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <LunchDiningIcon className='Hamburger'/>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Home" exact>
                <HomeIcon/> Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Tendance" exact>
                <WhatshotIcon className='logo_navbar'/> Tendance
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Films" exact>
                <MovieCreationIcon className='logo_navbar'/> Films
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Series" exact>
                <TvIcon className='logo_navbar'/> Series
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Rechercher" exact>
                <SearchIcon className='logo_navbar'/> Rechercher
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Apropos" exact>
                <MenuBookIcon className='logo_navbar'/> A Propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Watchlist" exact>
                <ViewListIcon className='logo_navbar'/> Watchlist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Connexion" exact>
                <LoginIcon className='logo_navbar'/> Connexion
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;
