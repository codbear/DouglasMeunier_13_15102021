import storage from 'local-storage-fallback';
import jwtDecode from 'jwt-decode';

import Request from './Request';
import STORAGE_KEYS from '../constants/storageKeys';

export default class ClientApi {
  /**
   * @param {string} baseUrl - Root url of the API.
   * @param {string} version - API version to use.
   */
  constructor(baseUrl = process.env.REACT_APP_API_ROOT_URL, version = 'v1') {
    /**
     * @type {string}
     */
    this.baseUrl = `${baseUrl}/${version}`;

    /**
     * @type {string}
     */
    this.version = version;

    /**
     * @type {String|null}
     */
    this.bearerToken = this.getStorageItem(STORAGE_KEYS.BEARER_TOKEN) || null;
  }

  /**
   * @public
   * @desc Check if JWT is not missing nor expired.
   * @return {boolean}
   * @example try { client.checkLoginStatus() } catch (e) { console.log(e) }
   */
  checkLoginStatus() {
    if (!this.bearerToken) {
      return false;
    }

    const { exp: expiration } = jwtDecode(this.bearerToken);
    const isJWTExpired = Date.now() > expiration * 1000;

    return !isJWTExpired && this.bearerToken;
  }

  /**
   * @public
   * @desc Create a GET request
   * @param {string} endpoint - API's endpoint to request
   * @returns {Request}
   */
  createGetRequest(endpoint) {
    return this.createRequest('GET', endpoint);
  }

  /**
   * @public
   * @desc Create a POST request
   * @param {string} endpoint - API's endpoint to request
   * @returns {Request}
   */
  createPostRequest(endpoint) {
    return this.createRequest('POST', endpoint);
  }

  /**
   * @public
   * @desc Create a PUT request
   * @param {string} endpoint - API's endpoint to request
   * @returns {Request}
   */
  createPutRequest(endpoint) {
    return this.createRequest('PUT', endpoint);
  }

  /**
   * @public
   * @desc Create a PATCH request
   * @param {string} endpoint - API's endpoint to request
   * @returns {Request}
   */
  createPatchRequest(endpoint) {
    return this.createRequest('PATCH', endpoint);
  }

  /**
   * @public
   * @desc Create a DELETE request
   * @param {string} endpoint - API's endpoint to request
   * @returns {Request}
   */
  createDeleteRequest(endpoint) {
    return this.createRequest('DELETE', endpoint);
  }

  /**
   * @private
   * @desc Create a request
   * @param {HTTPMethod} method
   * @param {string} endpoint
   * @returns {Request}
   */
  createRequest(method, endpoint) {
    const request = new Request(this.baseUrl, method, endpoint);

    request.setHeader('Authorization', `Bearer${this.bearerToken}`);

    return request;
  }

  /**
   * @public
   * @desc Get an item from local storage by its key.
   * @param {String} storageKey Key to get. It'll be prepend by client version of this instance.
   * @return {String|Number} The local storage item.
   */
  getStorageItem(storageKey) {
    return storage.getItem(this.prependStringWithClientVersion(storageKey));
  }

  /**
   * @public
   * @desc Set a local storage item.
   * @param {String} storageKey Key to set. It'll be prepend by client version of this instance.
   * @param {String|Number} itemValue The value to store.
   */
  setStorageItem(storageKey, itemValue) {
    storage.setItem(this.prependStringWithClientVersion(storageKey), itemValue);
  }

  /**
   * @public
   * @desc Remove an item from local storage by its key.
   * @param {String} storageKey Key to remove. It'll be prepend by client version of this instance.
   */
  removeStorageItem(storageKey) {
    storage.removeItem(this.prependStringWithClientVersion(storageKey));
  }

  /**
   * @private
   * @desc Prepend given string.
   * @param {String} string String to prepend.
   * @return {String} A new string prepended with the version of this client instance.
   */
  prependStringWithClientVersion(string) {
    return `clientAPI${this.version}__${string}`;
  }
}
