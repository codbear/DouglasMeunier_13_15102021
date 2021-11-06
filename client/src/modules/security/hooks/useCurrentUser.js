import { useSelector } from 'react-redux';

const useCurrentUser = () => useSelector((state) => state.security.currentUser);

export default useCurrentUser;
