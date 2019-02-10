import axios from 'axios';

import { baseUrl, jwtToken } from './constants';

class BaseProxy {
  requestTypes = {
    post: 'post',
    get: 'get',
    put: 'put',
    delete: 'delete'
  }

  /**
   * The constructor of the BaseProxy.
   *
   * @param {string} endpoint   The endpoint being used.
   * @param {Object} parameters The parameters for the request.
   * @param {Object} parameters The parameters for the request.
   */
  constructor (endpoint, parameters = {}) {
    this.endpoint = endpoint
    this.baseUrl = baseUrl
    this.parameters = parameters
    this.baseHeaders = {
      Authorization: `Bearer ${jwtToken}`,
      Platform: 'win'
    }
  }

  /**
   * Method used to set the query parameters.
   *
   * @param {Object} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameters (parameters) {
    Object.keys(parameters).forEach((key) => {
      this.parameters[key] = parameters[key]
    })

    return this
  }

  /**
   * Method used to set a single parameter.
   *
   * @param {string} parameter The given parameter.
   * @param {*} value The value to be set.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameter (parameter, value) {
    this.parameters[parameter] = value

    return this
  }

  /**
   * Method used to remove all the parameters.
   *
   * @param {Array} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  removeParameters (parameters) {
    parameters.forEach((parameter) => {
      delete this.parameters[parameter]
    })

    return this
  }

  /**
   * Method used to remove a single parameter.
   *
   * @param {string} parameter The given parameter.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  removeParameter (parameter) {
    delete this.parameters[parameter]

    return this
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @returns {Promise} The result in a promise.
   */
  all = () => {
    return this.submit(this.requestTypes.get, `/${this.endpoint}`)
  }

  /**
   * Method used to fetch a single item from the API.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  find = (id) => {
    return this.submit(this.requestTypes.get, `/${this.endpoint}/${id}`)
  }

  /**
   * Method used to create an item.
   *
   * @param {Object} item The given item.
   *
   * @returns {Promise} The result in a promise.
   */
  create = (item) => {
    return this.submit(this.requestTypes.post, `/${this.endpoint}`, item)
  }

  /**
   * Method used to update an item.
   *
   * @param {int}    id   The given identifier.
   * @param {Object} item The given item.
   *
   * @returns {Promise} The result in a promise.
   */
  update = (id, item) => {
    return this.submit(this.requestTypes.put, `/${this.endpoint}/${id}`, item)
  }

  /**
   * Method used to destroy an item.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  destroy = (id) => {
    return this.submit(this.requestTypes.delete, `/${this.endpoint}/${id}`)
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @returns {string} The parameter string.
   */
  getParameterString () {
    const keys = Object.keys(this.parameters)

    const parameterStrings = keys
      .filter((key) => !!this.parameters[key])
      .map((key) => `${key}=${this.parameters[key]}`)

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string}      requestType The request type.
   * @param {string}      endpoint         The endpoint for the request.
   * @param {Object|null} data        The data to be send with the request.
   * @param {Object} headers        The headers to be send with the request.
   *
   * @returns {Promise} The result in a promise.
   */
  submit (requestType, endpoint, data = null, headers = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `${endpoint}${this.getParameterString()}`,
          baseURL: this.baseUrl,
          method: requestType,
          data,
          headers: this.baseHeaders
        })
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default BaseProxy
