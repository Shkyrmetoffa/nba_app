import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/Buttons';
import CardInfo from '../CardInfo/CardInfo';

import style from './newsList.css';

class NewsList extends Component {
    state = {
      items: [],
      teams: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount
    };

    componentWillMount() {
      this.request(this.props.start, this.props.end);
    };

    request = (start, end) => {
      if(this.state.teams.length < 1) {
        axios.get(`${URL}/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
      }

      axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
        .then( response => {
            this.setState({
                items: [...this.state.items, ...response.data]
            });
        });
    };

    loadMore = () => {
      let end = this.state.end + this.state.amount;
      this.request(this.state.end, end);
    }

    renderNews = (type) => {
      let template = null;

      switch(type) {
        case('card'): 
          template = this.state.items.map((item, i) => (
            <CSSTransition
              classNames={{
                enter: style.newsList_wrap,
                enterActive: style.newsList_wrap_enter
              }}
              timeout={500}
              key={i}
            >
              <div key={i}>
                <div className={style.newsList_item}>
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div> 
            </CSSTransition>   
          ));
          break;
        default:
          template = null;
      };
        return template;
    }
    render() {
      return (
        <div>
          <TransitionGroup 
            component="div"
            className="list"
          >
            { this.renderNews(this.props.type) }
          </TransitionGroup>
          <Button 
            type="loadmore"
            loadMore={() => this.loadMore()}
            cta="Load more news"
          />
        </div>
      );
    };
};

export default NewsList;
