import { useDispatch } from 'react-redux';

import { LOGOUT } from '../reducers/authSlice';
const Logout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LOGOUT());
    window.location.href = '/login';
  };

  return logout();
};

export default Logout;
