import { useSelector } from 'react-redux';

const useIsConnected = () => useSelector((state) => state.security.isConnected);

export default useIsConnected;
