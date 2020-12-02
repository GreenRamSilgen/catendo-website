import React from 'react';
import PropTypes from 'prop-types';

import * as S from './DonoCard.style';

function DonoCard({ price, tierName }) {
  return (
    <S.Card>
      <S.Tophalf>
        <S.Price>{price}</S.Price>
      </S.Tophalf>
      <S.Bottomhalf>
        <S.TierName>{tierName}</S.TierName>
      </S.Bottomhalf>
    </S.Card>
  );
}

DonoCard.PropTypes = {
  price: PropTypes.string,
  tierName: PropTypes.string,
};
export default DonoCard;
