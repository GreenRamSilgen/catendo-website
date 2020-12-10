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
        <S.PitchCatch>Coming Soon!</S.PitchCatch>
        <S.Pitch>
          Cat Theft Manual is an open world sandbox game where the player gets
          to take control of a cat and do various activities around the map.
          They can do missions for two main factions: the stray cats and the
          home cats. The player is free to support either faction or they can
          remain neutral and attempt to close the divide between the two
          factions. Meet the cats that are allied to each faction as you go
          through the story. Will you fight for the Home cats or the Stray cats?
          The world is your litter-box.
        </S.Pitch>
      </S.Seller>
    </S.Block>
  );
}

export default Advertise;
