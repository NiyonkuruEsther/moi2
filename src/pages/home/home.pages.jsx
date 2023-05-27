import {
  HomeLayout,
  EventLayout,
  BioLayout,
  PlaylistLayout,
  VideoLayout,
} from "../../layout/layout";

function Home() {
  return (
    <div className="max-w-[1380px] mx-auto">
      <HomeLayout />
      <EventLayout />
      <BioLayout />
      <PlaylistLayout />
      <VideoLayout />
    </div>
  );
}

export default Home;
