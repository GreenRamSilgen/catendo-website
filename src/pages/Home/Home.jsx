import React from 'react';
import Advertise from './Advertise';
import Donation from './Donation';
import Mapblock from './Mapblock';

function Home() {
  return (
    <div>
      <Advertise />
      <Donation />
      <Mapblock />
      {/* Footer about stuff? */}
    </div>
  );
}

export default Home;
