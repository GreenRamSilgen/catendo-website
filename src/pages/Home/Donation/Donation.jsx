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
        <DonoCard price="$25" tierName="Kitten Tier" />
        <DonoCard price="$50" tierName="Cat Tier" />
        <DonoCard price="$100" tierName="Lion Tier" />
      </S.Cardholder>
    </S.Block>
  );
}

export default Donation;
