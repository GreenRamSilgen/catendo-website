import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import * as S from './Advertise.style';

import GameCover from '../../../assets/catTheftManual.jpg';

function Advertise() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <S.Block>
      <S.Hooker data-aos="fade-right">
        <S.Title>Cat Theft Manual</S.Title>
        <S.AdImg src={GameCover} />
      </S.Hooker>
      <S.Seller data-aos="fade-left">
        <S.Pitch>
          <div>
            <h1>Coming Soon!</h1>
          </div>
          Cat Theft Manual is game where you can go on an open world adventure.
          Befriend other feline fellows and explore Catsburg.
        </S.Pitch>
      </S.Seller>
    </S.Block>
  );
}

export default Advertise;
