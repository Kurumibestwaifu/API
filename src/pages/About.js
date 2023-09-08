import { logout } from "../utilities/common";
import { React } from 'react';
import { Link } from 'react-router-dom'
import { useAppSelector } from "../containers/store";
import icon from './Pic/logo1.jpg';
function About(){
  const { isAuth, data: userData } = useAppSelector((state) => state.authReducer);
    return(

<div>
<section id="header">
  <img src={icon} class="logo" alt=""/>
  <div>
       <ul id="navbar">
        <li><Link to='/'>About</Link></li>
        <li><Link to='/Shashin'>Shashin</Link></li>
        <li><Link to ='/Eiga'>Eiga</Link></li>
        <li><Link to='/Seikaku'>Seikaku</Link></li>
       <li>{!isAuth && <Link to="/signin" >Login </Link>}</li> 
        <li>{isAuth && <Link to="/signin" onClick={logout}>Logout</Link>}</li>
       </ul>
  </div>
</section>
<section id="waifu">
  <h4>My favorite character</h4>
  <h2> Tokisaki Kurumi</h2>
  <h1> Anime: Date a live
    Team member: Lê Văn Hùng 22560032
                 Vũ Đại Nam  22560012
  </h1>

</section>

  
<script></script>
</div>
)

}
export default About; 