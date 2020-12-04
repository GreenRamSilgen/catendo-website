import React, { useState } from 'react';

import * as S from './Mapblock.style';

import ctmMap from '../../../assets/ctmMap.png';

function Mapblock() {
  const [mapZoom, setMapZoom] = useState(false);

  return (
    <S.Block mapZoom={mapZoom}>
      <S.Mapblock mapZoom={mapZoom}>
        <S.Maptitle>Cat Theft Manual Open World</S.Maptitle>
        <S.MapSub>
          <S.CtmMap src={ctmMap} alt="map of cat theft auto" />
          {mapZoom ? (
            <S.ZoomBtn onClick={() => setMapZoom(false)}>
              <i className="fas fa-search-minus" />
            </S.ZoomBtn>
          ) : (
            <S.ZoomBtn onClick={() => setMapZoom(true)}>
              <i className="fas fa-search-plus" />
            </S.ZoomBtn>
          )}
        </S.MapSub>
      </S.Mapblock>
      {mapZoom ? null : (
        <S.DescriptionBlock>
          <S.Description>
            The world is your litter box. With three main sections, The City,
            Suburb and Farm. You can explore all three and discover all the
            secrets of this world.
          </S.Description>
        </S.DescriptionBlock>
      )}
    </S.Block>
  );
}

export default Mapblock;
