import React from 'react';
import * as S from './Donation.style';

import DonoCard from './DonoCard';

function Donation() {
  return (
    <S.Block>
      <S.Titleholder>
        <S.Title>Become a Patron!</S.Title>
      </S.Titleholder>
      <S.Cardholder>
        <DonoCard price="$25" tierName="Kitten" />
        <DonoCard price="$50" tierName="Cat" />
        <DonoCard price="$100" tierName="Lion" />
      </S.Cardholder>
    </S.Block>
  );
}

export default Donation;
