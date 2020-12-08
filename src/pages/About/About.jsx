import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import TempPdf from '../../assets/Chapter7.pdf';
import * as S from './About.style';

function About() {
  const [currPage, setCurrPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: { zIndex: 1000 },
  };

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
          can be viewed in the design document below.
        </S.Statement>
      </S.AboutSection>
      <S.ViewDocBtn onClick={() => setIsOpen(true)}>
        VIEW DESIGN DOCUMENT
      </S.ViewDocBtn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="PDF DISPLAY"
      >
        <Document file={TempPdf}>
          <Page pageIndex={currPage} height={510} />
          <S.LeftButton
            onClick={() => {
              setCurrPage(currPage - 1);
            }}
          >
            &lt;
          </S.LeftButton>
          <S.RightButton onClick={() => setCurrPage(currPage + 1)}>
            &gt;
          </S.RightButton>
        </Document>
      </Modal>
    </S.Block>
  );
}
export default About;
