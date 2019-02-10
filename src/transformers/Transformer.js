export default class Transformer {
  /**
   * Method used to transform a fetched collection.
   *
   * @param items The items to be transformed.
   *
   * @returns {Array} The transformed items.
   */
  static fetchCollection (items) {
    return items.map((item) => this.fetch(item));
  }

  /**
   * Method used to transform a collection to be send.
   *
   * @param items The items to be transformed.
   *
   * @returns {Array} The transformed items.
   */
  static sendCollection (items) {
    return items.map((item) => this.send(item));
  }
}
