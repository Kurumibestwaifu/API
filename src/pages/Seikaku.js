import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../utilities/common";
import { useAppSelector } from "../containers/store";
import pacgk from './Pic/e2be93b077055364de12be37b35f71cd.jpg';
import icon from './Pic/logo1.jpg';
function Seikaku() {
  const { isAuth, data: userData } = useAppSelector((state) => state.authReducer);
  return (
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
      <section id="seikaku-head" className="section-p1">
        <img src={pacgk} alt=""/>
        <div>
          <h2>About Tokisaki Kurumi </h2>
          <p>Kurumi Tokisaki (時とき崎さき 狂くる三み, Tokisaki Kurumi?) is the third Spirit to appearDue to her brutal actions, she is referred to as the Worst Spirit (最悪の精霊, Saiaku no Seirei?). She is also the first Spirit to appear as an antagonist in the Date A Live series.
            Kurumi is a person whose character is difficult to read. She possesses a dislike of humanity that borders on mistrust, which is something that she shares with most of the other Spirits in her debut. She is a skilled actress as she is capable of putting on the façade of an innocent, curious young girl when she needs to. This skill of hers is shown when she registered as a student at Raizen High School and spoke in a polite manner. However, under that mask lies a mad woman, prone to fits of insane laughter and possessing no regard for human life, viewing them as a food source to restore her own time, and thus, a disposable commodity.
There is a twisted justice behind her methods, however, as the people that she brutally murdered were would-be rapists and animal abusers. Also, a good sign of her sense of justice lies in her ultimate objective: to go back in time, kill the First Spirit, prevent the Spacequakes from ever happening and saving millions of lives in the process. This goal made Phantom call her a kind person, albeit sarcastically.
In hindsight, Kurumi possesses some degree of innocence that her psychotic behavior has not entirely ruined; she has a soft spot for small animals and other creatures. She once slaughtered four humans not because she needed to replenish her time, but because they were trying to kill a kitten. She also appeared to have some desire for a normal life, a chance at redemption, as Shido was able to speak with one of her many timelines and nearly convinced her before the true Kurumi interrupted.
However, despite her redeeming qualities of not killing without a reason, Kurumi doesn't think of herself as a great person and even appears to hate being called one. When Shido stated that he would not give up on her despite her being a murderer, she responded by using her City of Devouring Time on the students of Raizen High School. She even summoned a Spacequake, which could have killed them all, in an attempt to make him give up on her. Also, when Phantom called her a kind person, Kurumi's initial response was to try to shoot her.
Her ability to summon clones of herself from her past adds even more complexity to her character. The clones are essentially herself, which mean they have the same personality. However, they also have free will to an extent, even if they share memories, goals, fears, and obsessions. Due to being made from the past, the clones may contain traits that Kurumi no longer possess, namely her old chunnibyou habits. Kurumi has shown a degree of embarrassment regrading this part of her past and those clones in particular whenever it is brought up.
Kurumi appears to have a particular liking for cats, as shown by her brutally murdering a group of men who were shooting at one with pellet guns. In an Omake, it is shown that she can be quite embarrassed about this. When Shido and Tohka caught her, she ended up going so far as to have one of her clones pretend to be the real her and "dispose" of her so that she could get out of the situation without ruining her reputation.
Before becoming a Spirit, Kurumi had a strong sense of justice. While lamenting about the inequality in the world, she always possessed a strong desire to help those in need. This trait was considered both pure and naïve, the latter of which Mio took advantage of to trick her into becoming a Spirit that hunted down other Spirits that were incompatible with their Sephira Crystals. After becoming more jaded, Kurumi is shown having developed a stronger tolerance towards despair, being the only Spirit to not immediately inverse after seeing Shido killed throughout her numerous time loops.
As a verbal tic, Kurumi has a habit of saying "Ara, Ara" (あら、あら) when particularly amused by something. Additionally, Kurumi also has a distinctive "Kihihihihi" (きひひひひ) laugh.</p>
        </div>
      </section>
    </div>
  );
}

export default Seikaku;