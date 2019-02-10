import BaseProxy from './BaseProxy'

class RatingProxy extends BaseProxy {
  constructor (parameters = {}) {
    super('/v1/rating', parameters)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getAll = (data) => {
    return this.submit(this.requestTypes.post, `${this.endpoint}/all/all`, data)
  }

  getTeams = (data) => {
    return this.submit(this.requestTypes.post, `${this.endpoint}/teams/all`, data)
  }

  getFriends = (data) => {
    return this.submit(this.requestTypes.post, `${this.endpoint}/friends/all`, data)
  }
}

export default RatingProxy
