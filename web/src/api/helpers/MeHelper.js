import Helper from '../models/Helper';

export default class MeHelper extends Helper {
  constructor() {
    super('/profile');
  }

  /**
   * @desc Get connected user's profile.
   * @returns {Promise}
   */
  me() {
    const request = this.api.createGetRequest(this.endpoint);

    return request.execute();
  }

  /**
   * @desc Update connected user's profile.
   * @param {Object.<string>} params - Profile payload.
   * @returns {Promise}
   */
  updateMe(params) {
    const request = this.api.createPutRequest(this.endpoint).setBodyParams(params);

    return request.execute();
  }
}
