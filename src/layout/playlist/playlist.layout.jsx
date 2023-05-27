import "./playlist.css";
import { Assets } from "../../assets/assets";

const { Frame } = Assets;

function PlaylistLayout() {
  return (
      <section className="playlist">
          <section className="playlist__head">
              <figcaption>
                  <img src={Frame} alt="" />
                  <h2 className="h2playlist">Released 
                      <span className="color"> playlist</span></h2>
              </figcaption>
          </section>
          <section className="playlist__body">
              hi
          </section>
      </section>
  )
}

export default PlaylistLayout;