import React from 'react';

import RatingConnector from './connectors/RatingConnector'
import RatingList from './components/RatingList';
import RatingItem from './components/RatingItem';
import Tabs from './components/Tabs';
import Search from './components/Search';

const Rating = (props) => (
  <div className='rating animated fadeIn'>
    <div className='rating__header'>
      <Tabs />
      <Search />
    </div>
    <div className='rating__list_description'>
      <div>
        <span className='description__id'>#</span>
        <span>player</span>
      </div>
      <span className='description__points'>points</span>
    </div>
    <RatingList />
    <div className='rating__footer'>
      <RatingItem { ...props.player } />
    </div>
  </div>
)

export default RatingConnector(Rating);
