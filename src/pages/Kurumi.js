
import { React } from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../utilities/common";
import { useAppSelector } from "../containers/store";
function Kurumi(){
  const { isAuth, data: userData } = useAppSelector((state) => state.authReducer);
    return(
        <div>
<section id="header">

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
  <h1> Anime: Date a live</h1>
   <h1>Team member:</h1>
   <h1>Lê Văn Hùng 22560032</h1>
                <h1> Vũ Đại Nam  22560012</h1>
</section>

  
<script></script>
</div>
    )

}
export default Kurumi; 