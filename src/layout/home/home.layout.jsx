import "./home.css";
import { Assets } from "../../assets/assets";


const { Logo, Frame, Frame2 } = Assets;

function homeLayout() {
  return (
    <section className='homecss'>
      <section className="topright">
        <section className="topright__child">
          <figcaption className="logo">
            <img src={Logo} alt="Moi Albert Sound"  />
          </figcaption>
          <frames className="frame">
            <img src={Frame} alt=""/>
          </frames>
          <hgroup className="hgroup">
            <h2 className="h2 font">Meet</h2>
            <h1 className="h1 zindexx font">
              <span>Moi </span>Albert
            </h1>
          </hgroup>
        </section>
        <section className="toptright__child_down">
          <frames>
            <img src={Frame2} alt=""/>
          </frames>
          <p className="param font">
            Gospel Recording Artist <br/> Founder | Author | Speaker | <br/> Musician | Exe-Producer
          </p>
          <button className="btn font">
            Find out more
          </button>
        </section>
      </section>
      <section className="topleft">
        <section className="topleft__child">
          hey
        </section>
      </section>
    </section>
  )
}

export default homeLayout;