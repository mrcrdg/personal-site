import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_profile.png`} alt="" />
      </Link>
      <header>
        <h2>Marcia Rodrigues</h2>
        <p><a href="mailto:marcia.rrdg@gmail.com">marcia.rrdg@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Marcia.
        I am a python developer at <a href="https://www.senaipr.org.br/tecnologiaeinovacao/nossarede/hubia/">Senai&apos;s AI Hub</a>.
        Highly interested in <a href="https://icme.stanford.edu/">Data Science</a> technologies.
        <a href="https://www.faculdadesdaindustria.org.br/"> FIEP</a> and <a href="http://www.utfpr.edu.br/english">UTFPR</a> Alumni.
        Linux user.
        Teamplayer.
        Nature & Outdoors.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Marcia Rodrigues<Link to="/"> mrcrdg.github.io</Link>.</p>
    </section>
  </section>
);
export default SideBar;
