import SecurityHelper from './helpers/SecurityHelper';
import MeHelper from './helpers/MeHelper';

export const api = {
  security: () => new SecurityHelper(),
  profile: () => new MeHelper(),
};
