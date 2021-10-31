import storage from 'local-storage-fallback';
import jwtDecode from 'jwt-decode';

import Request from './Request';

const BEARER_TOKEN_KEY = 'bearerToken';

export default class ClientApi {
  /**
   * @param {string} baseUrl - Root url of the API.
   * @param {string} version - API version to use.
   */
  constructor(baseUrl = process.env.REACT_APP_API_ROOT_URL, version = 'v1') {
    this.baseUrl = `${baseUrl}/${version}`;
    this.version = version;
    this.bearerToken = this.getStorageItem(BEARER_TOKEN_KEY) || null;
  }

  /**
   * @public
   * @desc Execute a POST to API's login route and store returned JWT.
   * @param {Object.<string>} userCredentials - User's credentials.
   * @returns {Promise<void>}
   */
  async login(userCredentials) {
    try {
      const request = new Request(this.baseUrl, 'POST', '/user/login');
      const response = await request.setBodyParams(userCredentials).execute();
      const { token } = response.data.body;

      this.setStorageItem(BEARER_TOKEN_KEY, token);
    } catch (e) {
      this.removeStorageItem(BEARER_TOKEN_KEY);
    }
  }

  /**
   * @public
   * @desc Throw an error if JWT is missing or expired.
   * @example try { client.checkLoginStatus() } catch (e) { console.log(e) }
   */
  checkLoginStatus() {
    if (!this.bearerToken) {
      throw new Error('JWT is missing.');
    }

    const { exp: expiration } = jwtDecode(this.bearerToken);
    const isJWTExpired = Date.now() > expiration * 1000;

    if (isJWTExpired) {
      throw new Error('JWT is expired.');
    }
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

    request.setHeaders({ Authorization: `Bearer${this.bearerToken}` });

    return request;
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

  /**
   * @private
   * @desc Get an item from local storage by its key.
   * @param {String} storageKey Key to get. It'll be prepend by client version of this instance.
   * @return {String|Number} The local storage item.
   */
  getStorageItem(storageKey) {
    return storage.getItem(this.prependStringWithClientVersion(storageKey));
  }

  /**
   * @private
   * @desc Set a local storage item.
   * @param {String} storageKey Key to set. It'll be prepend by client version of this instance.
   * @param {String|Number} itemValue The value to store.
   */
  setStorageItem(storageKey, itemValue) {
    storage.setItem(this.prependStringWithClientVersion(storageKey), itemValue);
  }

  /**
   * @private
   * @desc Remove an item from local storage by its key.
   * @param {String} storageKey Key to remove. It'll be prepend by client version of this instance.
   */
  removeStorageItem(storageKey) {
    storage.removeItem(this.prependStringWithClientVersion(storageKey));
  }
}