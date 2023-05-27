import {HomeLayout, EventLayout, BioLayout, PlaylistLayout, VideoLayout} from "../../layout/layout"

function Home() {
  return (
      <div>
        <HomeLayout />
        <EventLayout />
      <BioLayout />
      <PlaylistLayout />
      <VideoLayout/>
      </div>
  )
}

export default Home;