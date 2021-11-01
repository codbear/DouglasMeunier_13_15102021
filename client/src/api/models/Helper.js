import ClientApi from './ClientApi';

export default class Helper {
  /**
   * @param {string} endpoint - API's endpoint to request
   */
  constructor(endpoint) {
    /**
     * @type {ClientApi}
     */
    this.api = new ClientApi();

    /**
     * @type {string}
     */
    this.endpoint = endpoint;
  }

  /**
   * @public
   * @desc Execute a GET request to fetch an item.
   * @param {string|number} itemId - Id of the item to get.
   * @returns {Promise}
   */
  get(itemId) {
    const request = this.api.createGetRequest(this.endpoint).setRouteParam('id', `${itemId}`);

    return request.execute();
  }

  /**
   * @public
   * @desc Execute a POST request to create an item.
   * @param {object} params - Body of the request.
   * @returns {Promise}
   */
  create(params) {
    const request = this.api.createPostRequest(this.endpoint).setBodyParams(params);

    return request.execute();
  }

  /**
   * @public
   * @desc Create a PUT request to update an item.
   * @param {string|number} itemId - Id of the item to update.
   * @param {object} params - Body of the request.
   * @returns {Promise}
   */
  update(itemId, params) {
    const request = this.api
      .createPutRequest(this.endpoint)
      .setRouteParam('id', `${itemId}`)
      .setBodyParams(params);

    return request.execute();
  }

  /**
   * @public
   * @desc Create a PATCH request to partially update an item.
   * @param {string|number} itemId - Id of the item to update.
   * @param {Object} params - Body of the request.
   * @returns {Promise}
   */
  partialUpdate(itemId, params) {
    const request = this.api
      .createPatchRequest(this.endpoint)
      .setRouteParam('id', `${itemId}`)
      .setBodyParams(params);

    return request.execute();
  }

  /**
   * @public
   * @desc Create a DELETE request to delete an item.
   * @param {string|number} itemId - Id of the item to delete.
   * @returns {Promise}
   */
  delete(itemId) {
    const request = this.api.createDeleteRequest(this.endpoint).setRouteParam('id', itemId);

    return request.execute();
  }
}
