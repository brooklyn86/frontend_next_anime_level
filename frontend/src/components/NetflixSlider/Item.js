import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import { Link, useHistory } from 'react-router-dom';
import './Item.scss'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
          id="lista"
        >
          <Link to={`/anime/${movie.Id}/${movie.Nome}`}><a href="#lista" >
          <h5>{movie.Nome}</h5>

          <img src={movie.Imagem} alt={movie.Nome}/>
          {isActive && <Mark />}
          </a></Link>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
