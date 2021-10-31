import Helper from '../models/Helper';
import Request from '../models/Request';
import STORAGE_KEYS from '../constants/storageKeys';

export default class SecurityHelper extends Helper {
  constructor() {
    super('');
  }

  async login(userCredentials) {
    const response = await this.api
      .createPostRequest('/user/login')
      .setBodyParams(userCredentials)
      .execute();
    const { token } = response.data.body;

    this.setStorageItem(STORAGE_KEYS.BEARER_TOKEN, token);
  }
}