import React from 'react';
import Member from './Member';

import * as S from './Team.style';

import tempImg from '../../assets/catFace.png';

function Team() {
  const team = [
    { name: 'Frank Fangran Feng', img: tempImg },
    { name: 'Jenny Nguyen', img: tempImg },
    { name: 'Kevin Cui Gong', img: tempImg },
    { name: 'Nour Ghaith Hamade', img: tempImg },
    { name: 'Scottie Huynh', img: tempImg },
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
