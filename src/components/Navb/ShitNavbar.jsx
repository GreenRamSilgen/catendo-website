import React from 'react';
import { ReactNavbar } from 'react-responsive-animate-navbar';
import CatSVG from '../../assets/Cat.svg';

function ShitNavbar() {
  return (
    <ReactNavbar
      color="rgb(25, 25, 25)"
      logo={CatSVG}
      menu={[
        { name: 'HOME', to: '/' },
        { name: 'CHARACTERS', to: '/character' },
        { name: 'TEAM', to: '/team' },
        { name: 'CONTACT', to: '/contact' },
      ]}
      social={[
        // {
        //   name: 'Linkedin',
        //   url: 'https://www.linkedin.com/in/nazeh-taha/',
        //   icon: ['fab', 'linkedin-in'],
        // },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: ['fab', 'facebook-f'],
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/',
          icon: ['fab', 'instagram'],
        },
        {
          name: 'Twitter',
          url: 'http://www.twitter.com/',
          icon: ['fab', 'twitter'],
        },
      ]}
    />
  );
}

export default ShitNavbar;
