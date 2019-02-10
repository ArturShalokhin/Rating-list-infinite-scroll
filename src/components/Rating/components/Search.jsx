import React from 'react'

import searchImgUrl from '../../../assets/img/search.png'
import SearchConnector from '../connectors/SearchConnector'

class Search extends React.PureComponent {
  state = {
    search: ''
  };
  render () {
    return (
      <div className='rating__search'>
        <input type='text' placeholder='Search...' onChange={(e) => this.setState({ search: e.target.value })} />
        <button className='rating__search_button' onClick={() => this.props.search(this.state.search)}><img src={searchImgUrl} alt="search"/></button>
      </div>
    )
  }
}

export default SearchConnector(Search)
