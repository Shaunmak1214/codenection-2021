import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Comp from '../components/organisms';
import store from '../store';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../reducers/authSlice';
import { CLEARREG } from '../reducers/formSlice';
import axios from 'axios';
import { API_URL } from '../constants';

interface Props {
  header?: boolean;
  component: any;
  children?: any;
  isProtected?: boolean;
  exact: boolean;
  path: string;
  clearForm?: boolean;
}

const CNRoutes = ({
  header,
  isProtected = false,
  component: Component,
  clearForm = true,
  ...rest
}: Props) => {
  const authState = store.getState().auth;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LOGOUT());
  };
  const clearreg = () => {
    dispatch(CLEARREG());
  };

  if (clearForm) {
    clearreg();
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/auth`, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 203 || res.status === 204) {
          return;
        } else {
          logout();
        }
      })
      .catch((err) => {
        console.log(err);
        logout();
      });
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isProtected && !authState.isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        } else {
          return (
            <>
              {header && <Comp.Header />}
              <Component {...props} />
            </>
          );
        }
      }}
    />
  );
};

CNRoutes.propTypes = {
  header: PropTypes.bool,
  component: PropTypes.any,
  children: PropTypes.node,
  exact: PropTypes.bool,
  path: PropTypes.string,
  isProtected: PropTypes.bool,
  location: PropTypes.object,
};

export default CNRoutes;
