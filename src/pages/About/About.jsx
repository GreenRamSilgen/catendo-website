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
        <S.Title>Upcoming Games: CTM</S.Title>
        <S.Statement>
          Immerse yourself in the city of Catsburg and play as a cat. You have
          just been taken into an Animal shelter after your mom was killed in
          traffic. Escape the shelter with the help of a cat named Bella. As you
          explore you learn about the conflict between the Home cats and the
          Stray cats. The Home cats lead by Maximilan and the Stray cats lead by
          Bruno. Do missions and gain respect for the faction of your choice.
          Who will you side with? Will you walk the left, right or middle path?
        </S.Statement>
      </S.AboutSection>
    </S.Block>
  );
}
export default About;
