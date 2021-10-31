import { useSelector } from 'react-redux';
import { getIsConnected } from '../selectors';

const useIsConnected = () => {
  return useSelector(getIsConnected);
};

export default useIsConnected;
