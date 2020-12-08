import React from 'react';
import Advertise from './Advertise';
import Donation from './Donation';
import Mapblock from './Mapblock';
import DocView from './DocView';

function Home() {
  return (
    <div>
      <Advertise />
      <Donation />
      <Mapblock />
      <DocView />
      {/* Footer about stuff? */}
    </div>
  );
}

export default Home;
