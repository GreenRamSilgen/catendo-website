import React from 'react';
import * as S from './About.style';

function About() {
  return (
    <S.Block>
      <S.AboutSection>
        <S.Title>About Catendo</S.Title>
        <S.Statement>
          At Catendo we believe in making video games that transport the player
          into the game world, where the problems of real life melt away. Our
          games focus on making the experience as relaxing and enjoyable as
          possible. No need to pull out your hair trying to complete a mission
          over and over again and having the npc insult you by saying &lsquo;All
          you had to do was follow the train&rsquo;.
        </S.Statement>
      </S.AboutSection>
      <S.AboutSection>
        <S.Title>Upcoming Games</S.Title>
        <S.Statement>
          Cat Theft Manual is an open world game that is currently in
          development. It gives the player the freedom to do whatever they want
          in Catsburg. Meet other cats make friends, help the home cats, stray
          cats or both. The game is still in the design phase. Current iteration
          can be viewed in the design document located at the bottom of our home
          page.
        </S.Statement>
      </S.AboutSection>
    </S.Block>
  );
}
export default About;
