import Transformer from './Transformer';

class RatingTransformer extends Transformer {
  static fetch (item) {
    return {
      id: item.id,
      name: item.username || item.name,
      position: item.position,
      photo: item.photo,
      points: item.points
    }
  }
}

export default RatingTransformer;
