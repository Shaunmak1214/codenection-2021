import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGOUT } from '../reducers/authSlice';
const Logout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LOGOUT());
  };

  const autoLogOut = () => {
    logout();
    return <Redirect to={{ pathname: '/login' }} />;
  };
  return autoLogOut();
};

export default Logout;
