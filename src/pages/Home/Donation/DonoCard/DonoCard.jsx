import React from 'react';
import PropTypes from 'prop-types';

import * as S from './DonoCard.style';

function DonoCard({ price, tierName }) {
  return (
    <S.Card>
      <S.Tophalf>
        <S.TierName>{tierName}</S.TierName>
        <S.Price>{price}</S.Price>
      </S.Tophalf>
      <S.Bottomhalf>
        <S.JoinBtn> Subscribe</S.JoinBtn>
      </S.Bottomhalf>
    </S.Card>
  );
}

export default DonoCard;

DonoCard.propTypes = {
  price: PropTypes.string.isRequired,
  tierName: PropTypes.string.isRequired,
};
