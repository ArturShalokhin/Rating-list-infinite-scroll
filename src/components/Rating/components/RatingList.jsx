import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import RatingListConnector from '../connectors/RatingListConnector';
import RatingItem from './RatingItem';

class RatingList extends React.PureComponent {
  render () {
    const loadMoreAction = this.props.isLoading ? () => null : () => this.props.loadMore()
    return (
      <div className='rating__list' ref={(ref) => this.scrollParentRef = ref}>
        { (this.props.isDownloaded && !this.props.list.length) && <div className='not-found'>not found :(</div>}
        <InfiniteScroll pageStart={0}
                        initialLoad={false}
                        loadMore={loadMoreAction}
                        hasMore={this.props.isHasMore}
                        useWindow={false}
                        getScrollParent={() => this.scrollParentRef}
                        loader={<div className='loader' key={0}>Loading ...</div>}>
          { this.props.list.map((item, index) => <RatingItem {...item} key={index} />) }
        </InfiniteScroll>
      </div>
    )
  }
}

export default RatingListConnector(RatingList);
