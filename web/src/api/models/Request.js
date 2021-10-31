import axios from 'axios';

/**
 * @typedef {"GET"|"POST"|"PATCH"|"PUT"|"DELETE"} HTTPMethod
 */

/**
 * @desc Return an URIComponent encoded string.
 * @param {Object.<string>} jsObject - An object containing multiple values.
 * @returns {string} - The encoded string.
 * @example serialized({ 'foo': 'bar', 'bar': 'foo' });
 */
function serialized(jsObject) {
  return Object.keys(jsObject)
    .map((param) => `${param}=${encodeURIComponent(jsObject[param])}`)
    .join('&');
}

export default class Request {
  /**
   * @param {string} baseURL - The root url of the API
   * @param {HTTPMethod} method - Method to use for the request
   * @param {string} endpoint - API's endpoint to request
   * @example const request = new Request('https://axample.com', 'GET', '/foo/:id')
   */
  constructor(baseURL, method, endpoint) {
    this.axios = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    /**
     * @type {HTTPMethod}
     */
    this.method = method;

    /**
     * @type {Object.<string>}
     */
    this.headers = {};

    /**
     * @type {string}
     */
    this.endpoint = endpoint;

    /**
     * @type {Object.<string>}
     */
    this.body = {};

    /**
     * @type {Object.<string>}
     */
    this.queryParams = {};

    /**
     * @type {Object.<string>}
     */
    this.routeParams = {};
  }

  /**
   * @public
   * @desc Define a specific header value.
   * @param {String} headerName - Header to set.
   * @param {String} headerValue - Value to set.
   * @return {Request} - This request.
   * @example request.setHeader('Content-Type', 'text/html');
   */
  setHeader(headerName, headerValue) {
    if (headerValue === undefined) {
      delete this.headers[headerName];
    } else {
      this.headers[headerName] = headerValue;
    }

    return this;
  }

  /**
   * @public
   * @desc Define body params.
   * @param {Object.<string>} body - An object containing multiple values.
   * @return {Request} - This request.
   * @example request.setBodyParams({ 'foo': 'bar', 'bar': 'foo' });
   */
  setBodyParams(body) {
    Object.assign(this.body, body);

    return this;
  }

  /**
   * @public
   * @desc Define query params.
   * @param {Object.<string>} queryParams - An object containing multiple values.
   * @return {Request} - This request.
   * @example request.setQueryParams({ 'foo': 'bar', 'bar': 'foo' });
   */
  setQueryParams(queryParams) {
    Object.assign(this.queryParams, queryParams);

    return this;
  }

  /**
   * @public
   * @desc Define a specific route param value.
   * @param {String} paramName Param to set.
   * @param {String} paramValue Value to set.
   * @return {Request} This request.
   * @example request.setRouteParam('foo', 'bar');
   */
  setRouteParam(paramName, paramValue) {
    this.routeParams[paramName] = paramValue;

    return this;
  }

  /**
   * @public
   * @desc Execute the request.
   * @returns {Promise}
   * @example request.execute();
   */
  async execute() {
    const url = this.getUrl();

    return this.axios.request({
      method: this.method,
      url,
      headers: this.headers,
      data: this.getSerializedBody(),
    });
  }

  /**
   * @private
   * @desc Get serialized body params.
   * @return {String} The serialized body.
   * @example request.getSerializedBody();
   */
  getSerializedBody() {
    return JSON.stringify(this.body);
  }

  /**
   * @private
   * @desc Get serialized query params.
   * @return {string} - The serialized query params.
   * @example request.getSerializedQueryParams();
   */
  getSerializedQueryParams() {
    return serialized(this.queryParams);
  }

  /**
   * @private
   * @desc Return request URL with correct route and query params.
   * @return {string} - The request URL.
   * @example const url = this.getUrl();
   */
  getUrl() {
    let url = this.endpoint.replace(/\/:([a-zA-Z0-9_]+)/gi, ($0, $1) =>
      this.routeParams[$1] ? `/${this.routeParams[$1]}` : ''
    );

    const queryParams = this.getSerializedQueryParams();

    if (queryParams) {
      url += `?${queryParams}`;
    }

    return url;
  }
}
