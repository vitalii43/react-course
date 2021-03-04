import React from 'react';

import styles from './Hero.scss';
import {Header} from '../../containers';
import heroImg from '../../assets/hero-img.jpg';

export const Hero = (props) => (
  <div className="hero">
    <Header>
      <span className="logo"><span className="netflix">netflix</span>rolette</span>
      <button className="btn add-movie">+ ADD MOVIE</button>
    </Header>

    <div className="hero-background">
      <div className="hero-img-wrapper">
        <img className="hero-img" src={heroImg}/>
        <div className="hero-gradient"></div>
      </div>
    </div>

    <section className="search">
      <h1 className="search__header">FIND YOUR MOVIE</h1>
      <div className="search-body">
        <input 
          type="text" 
          className="search__input"
          placeholder="What do you want to watch?"
        />
        <button className="btn search__btn">search</button>
      </div>
    </section>
  </div>
)