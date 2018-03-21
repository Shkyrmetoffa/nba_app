import React from 'react';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';
import style from './slider.css';

const  SlidesTemplate = (props) => {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1
  };

  switch(props.type) {
    case ('features'):
      template = props.data.map((item, i) => {
        return (
          <div key={i} className={style.featured}>
            <div 
              className={style.featured_image}
              style={{
                  background: `url(../images/articles/${item.image})`
              }}
            >
              
            </div>
            <Link to={`/articles/${item.id}`}>
              <div className={style.featured_caption}>
                {item.title}
              </div>
            </Link>
          </div>
        )
      })
      break;
    default:
      template = null;
  }
  return (
    <Slick {...settings} >
      {template}
    </Slick>
  );
};

export default SlidesTemplate;