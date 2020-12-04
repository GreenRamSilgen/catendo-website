import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';

import * as S from './Member.style';

function Member({ idx, name, img }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <S.MemberBlock data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}>
      <S.MemberImg src={img} />
      <S.MemberName>{name}</S.MemberName>
    </S.MemberBlock>
  );
}

Member.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Member;
