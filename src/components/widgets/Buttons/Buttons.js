import React from 'react';
import { Link } from 'react-router-dom';

import style from './buttons.css';

const Buttons = (props) => {
  let template = null;

  switch(props.type) {
    case 'loadmore': 
      template = (
        <div 
          className={style.btn_load_more}
          onClick={props.loadMore}
        >
          {props.cta}
        </div>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Buttons;
