import React from 'react'

import {loadDefaultImage} from '../../../utils';
import defaultAvatarUrl from '../../../assets/img/default-avatar.png';


const RatingItem = (props) => {
  const loadErrorImageAction = (e) => loadDefaultImage(e, defaultAvatarUrl);
  return (
    <div className='rating__item animated fadeIn'>
      <div className='rating__item_left'>
        <span className='rating__item_position'>{props.position}</span>
        <img className='rating__item_photo' src={props.photo} alt='avatar' onError={loadErrorImageAction} />
        <span className='rating__item_name'>{props.name}</span>
      </div>
      <div className='rating__item_right'>
        <span className='rating__item_points'>{props.points}</span>
      </div>
    </div>
  )
}

export default RatingItem
