import "./playlist.css";
import { Assets } from "../../assets/assets";
import ImageText from "./ImageText";
import Sites from "./Sites";

const { Frame } = Assets;

function PlaylistLayout() {
  return (
    <section className="pl-16 flex flex-col gap-20 py-20 ">
      <section className="playlist__head pl-32">
        <figcaption>
          <img src={Frame} alt="" />
          <h2 className="h2playlist">
            Released
            <span className="color"> playlist</span>
          </h2>
        </figcaption>
      </section>
      <section className="playlist__body">
        <div className="flex gap-12 items-center">
          <p className="text-black opacity-20 font-bold text-7xl">01</p>
          <div className="grid grid-cols-2 divide-x-2 ">
            <div className="w-max ">
              <ImageText />
            </div>
            <div className="justify-self-center pl-20">
              <Sites />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PlaylistLayout;
