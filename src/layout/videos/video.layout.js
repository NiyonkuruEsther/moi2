import "./video.css";

import { Assets } from "../../assets/assets";

const { Frame2 } = Assets;

function VideoLayout() {
  return (
      <section className="video">
          <figcaption>
              <img src={Frame2} alt="" className="border"/>
          </figcaption>
          <h2 className="txt">
                  new <span className="color__video"> videos</span> out
          </h2>
          <button className="btn__video">
              Subscribe to my Youtube Channel
          </button>
      </section>
  )
}

export default VideoLayout;