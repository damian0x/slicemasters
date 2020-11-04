import React from 'react';
import CurrentlySlicing from '../components/CurrentlySlicing';
import HotSlices from '../components/HotSlices';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatesData';

function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}

export default HomePage;
