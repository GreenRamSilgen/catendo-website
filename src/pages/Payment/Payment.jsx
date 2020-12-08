import React from 'react';
import * as S from './Payment.style';

export default function Payment() {
  return (
    <S.Block>
      <S.Title>Payment Info</S.Title>
      <S.InputBlock>
        <S.NameBlock>
          <S.InputFirstName placeholder="First Name" required />
          <S.InputLastName placeholder="Last Name" required />
        </S.NameBlock>
        <S.InputEmail placeholder="Email" required />
        <S.InputStreet placeholder="Street" required />
        <S.CityZipBlock>
          <S.InputCity placeholder="City" required />
          <S.InputZip placeholder="Zip code" required />
        </S.CityZipBlock>
        <S.InputCard placeholder="Card Number" required />

        <S.DateAndCvcBlock>
          <S.DateBlock>
            <S.InputMonth placeholder="--" required />
            -
            <S.InputYear placeholder="----" required />
          </S.DateBlock>
          <S.InputCvc placeholder="CVC" required />
        </S.DateAndCvcBlock>
        <S.PayBtn formAction="/home" type="submit">
          Confirm
        </S.PayBtn>
      </S.InputBlock>
    </S.Block>
  );
}
