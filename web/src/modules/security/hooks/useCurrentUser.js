import { useSelector } from 'react-redux';

const useCurrentUser = () => useSelector((state) => state.user.currentUser);

export default useCurrentUser;
