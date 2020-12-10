import React from 'react';
import Member from './Member';

import * as S from './Team.style';

import tempImg from '../../assets/catFace.png';
import jennyImg from '../../assets/jenny.png';
import frankImg from '../../assets/frank.png';
import nourImg from '../../assets/nour.png';
import scottieImg from '../../assets/scottie.jpg';
import kevinImg from '../../assets/kevin.png';

function Team() {
  const team = [
    { name: 'Frank Fangran Feng', img: frankImg },
    { name: 'Jenny Nguyen', img: jennyImg },
    { name: 'Kevin Cui Gong', img: kevinImg },
    { name: 'Nour Ghaith Hamade', img: nourImg },
    { name: 'Scottie Huynh', img: scottieImg },
    { name: 'Kiran Shrestha', img: tempImg },
  ];

  return (
    <S.Block>
      {team.map((member, idx) => (
        <Member idx={idx} name={member.name} img={member.img} />
      ))}
    </S.Block>
  );
}

export default Team;
