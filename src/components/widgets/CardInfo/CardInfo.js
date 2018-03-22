import React from 'react';
import FontAwesome from 'react-fontawesome';

import style from './cardInfo.css';

const CardInfo = (props) => {
    const teamName = (teams, team) => {
      let data = teams.find(item => item.id === team);
      if(data) return data.name;
    }
    return (
        <div className={style.card_info}>
          <span className={style.team_name}>
            {teamName(props.teams, props.team)}
          </span>
          <span className={style.date}>
            <FontAwesome name="clock-o" />
            {props.date}
          </span>
        </div>
    );
};

export default CardInfo;
