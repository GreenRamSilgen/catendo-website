import React, { useState } from 'react';
import * as S from './Slider.style';

import ImgComp from './ImageComp';
import pic1 from '../../../assets/pic1alt.PNG';
import pic2 from '../../../assets/pic2alt.png';
import pic3 from '../../../assets/pic3.PNG';
import pic4 from '../../../assets/pic4.PNG';
import pic5 from '../../../assets/pic5.PNG';
import pic6 from '../../../assets/pic6.PNG';
import pic7 from '../../../assets/pic7.PNG';
import pic8 from '../../../assets/pic8.PNG';

function Slider() {
  const sliderArr = [
    <ImgComp src={pic1} />,
    <ImgComp src={pic2} />,
    <ImgComp src={pic3} />,
    <ImgComp src={pic4} />,
    <ImgComp src={pic5} />,
    <ImgComp src={pic6} />,
    <ImgComp src={pic7} />,
    <ImgComp src={pic8} />,
  ];
  const [x, setX] = useState(0);

  const moveLeft = () => {
    // eslint-disable-next-line no-unused-expressions
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const moveRight = () => {
    // eslint-disable-next-line no-unused-expressions
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <S.Slider>
        {sliderArr.map((item) => {
          return (
            <S.Slide style={{ transform: `translateX(${x}%)` }}>{item}</S.Slide>
          );
        })}
      </S.Slider>
      <S.LeftBtn onClick={moveLeft}>
        <i className="fas fa-chevron-left fa-3x" />
      </S.LeftBtn>
      <S.RightBtn onClick={moveRight}>
        <i className="fas fa-chevron-right fa-3x" />
      </S.RightBtn>
    </div>
  );
}

export default Slider;
