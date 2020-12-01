import React from 'react';
import * as S from './Advertise.style';

import GameCover from '../../../assets/catTheftManual.jpg';

function Advertise() {
  return (
    <S.Block>
      <S.Hooker>
        <S.Title>Cat Theft Manual</S.Title>
        <S.AdImg src={GameCover} />
      </S.Hooker>
      <S.Seller>
        <h1>Coming Soon!</h1>
        <S.Pitch>
          Cat Theft Manual is game where you can go on an open world adventure.
          Befriend other feline fellows and explore the
        </S.Pitch>
      </S.Seller>
    </S.Block>
  );
}

export default Advertise;
