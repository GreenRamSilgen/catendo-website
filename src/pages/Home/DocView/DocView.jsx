import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import TempPdf from '../../../assets/Chapter7.pdf';
import * as S from './DocView.style';

export default function DocView() {
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
      <S.InfoSection>
        <S.Title>Catendo Design Document</S.Title>
        <S.Statement>
          This is the current version of the Design Document with all the things
          that we will have in our game. This document will be updated as we
          develop. The current iteration can be viewed by clicking the button
          below.
        </S.Statement>
      </S.InfoSection>
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
