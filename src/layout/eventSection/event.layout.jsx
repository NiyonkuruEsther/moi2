import "./event.css";
import { Assets } from "../../assets/assets";


const { Maskgroup } = Assets;

function EventLayout() {
  return (
    <section className="event">
          <section className="event__child">
              <div className="child__left">
                  <hgroup>
                      <h1 className="fontevent size">
                          Upcoming <br/> event
                      </h1>
                      <h1 className="fontevent sizesecond">
                          The Mantle of True <br/> Worship Book Launch
                      </h1>
                      <div className="separater font">
                          <div className="border_right margin">
                              <h3>This coming</h3>
                              <h3 className="colortext"> Thursday, June 1</h3>
                          </div>
                          <div className="margin">
                              <h3> Location</h3>
                              <h3 className="colortext"> Soon to be anounced</h3>
                          </div>
                      </div>
                  </hgroup>
                  <button className="btn custom">
                      Pre-Order
                  </button>
              </div>
              <div className="child__right">
                  <figcaption className="right_first">
                      <img src={Maskgroup} alt=""/>
                  </figcaption>
              </div>
          </section>
    </section>
  )
}

export default EventLayout;