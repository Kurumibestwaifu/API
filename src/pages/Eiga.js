
import { React } from 'react';
import { Link } from 'react-router-dom'
import icon from './Pic/logo1.jpg';
import m1 from './Movie/animevsub-69489.webp';
import m2 from './Movie/animevsub-9efuGfFVLq.jpg';
import m3 from './Movie/animevsub-44844.jpg';
import m4 from './Movie/animevsub-59777.jpg';
import m5 from './Movie/animevsub-76003.jpg';
import m6 from './Movie/animevsub-QnTibSp6CY.jpg';
import m7 from './Pic/473bf9e68f5338a139373efd645a86c3.jpg';
import m8 from './Pic/d705eb2d64c319c108b31c56218520c2.jpg';
import m9 from './Movie/animevsub-VsyImkZaYX.jpg';
import m10 from './Movie/animevsub-77947.jpg';
function Eiga(){
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
        <li><Link to='/sign in'>sign in</Link></li>
       </ul>
  </div>
</section>
<section id="eiga-header">

    <h2> Movie</h2>
   
  </section>
<section id="mv">
    <h2> Seasons </h2>
    <div class="vm">
       <div class="miv">
          <a href="https://animevietsub.fan/phim/date-a-live-encore-ova-i3-a289/xem-phim-5580.html"><img src={m1} alt=""/></a>
       <div class="des">
        <h5>Date A Live:Encore OVA</h5>
       </div>
       </div>
       <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-if-version-i3-a603/tap-01-29919.html"><img src={m2} alt=""/></a>
       <div class="des">
      <h5>Date A Live IF Version</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-s1-a286/tap-01-5547.html"><img src={m3} alt=""/></a>
     <div class="des">
      <h5>Date A Live season 1</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-date-to-date-i2-a288/xem-phim-5579.html"><img src={m4} alt=""/></a>
     <div class="des">
      <h5>Date A Live: Date to Date</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-2-i4-a287/tap-01-5559.html"><img src={m5} alt=""/></a>
     <div class="des">
      <h5>Date A Live II</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-iii-i1-a3325/tap-01-64383.html"><img src={m6} alt=""/></a>
     <div class="des">
      <h5>Date A Live Ⅲ</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-bullet-dead-or-bullet-a3874/xem-phim-72843.html"><img src={m7} alt=""/></a>
     <div class="des">
      <h5>Date A Bullet: Dead or Bullet</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-bullet-nightmare-or-queen-a3972/xem-phim-74022.html"><img src={m8} alt=""/></a>
     <div class="des">
      <h5>Date A Bullet: Nightmare or Queen</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-iv-m1-a4159/tap-01-83343.html"><img src={m9} alt=""/></a>
     <div class="des">
      <h5>Date A Live IV</h5>
     </div>
     </div>
     <div class="miv">
        <a href="https://animevietsub.fan/phim/date-a-live-movie-mayuri-judgment-i3-a290/xem-phim-5581.html"><img src={m10} alt=""/></a>
     <div class="des">
      <h5>Date A Live Movie: Mayuri Judgment</h5>
     </div>
     </div>
</div>
</section>
  
<script></script>
</div>



)

}
export default Eiga; 