import Helper from '../models/Helper';
import STORAGE_KEYS from '../constants/storageKeys';
import jwtDecode from 'jwt-decode';

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

    this.api.setStorageItem(STORAGE_KEYS.BEARER_TOKEN, token);
  }

  checkLoginStatus() {
    const token = this.api.bearerToken;

    if (!token) {
      throw new Error('JWT not found');
    }

    const { exp: expiration } = jwtDecode(token);
    const isJWTExpired = Date.now() > expiration * 1000;

    if (isJWTExpired) {
      throw new Error('JWT expired');
    }
  }

  logout() {
    this.api.removeStorageItem(STORAGE_KEYS.BEARER_TOKEN);
  }
}
