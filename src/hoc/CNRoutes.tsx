import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Comp from '../components/organisms';
import { useAxios } from '../hooks';
import store from '../store';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../reducers/authSlice';

interface Props {
  header?: boolean;
  component: any;
  children?: any;
  isProtected?: boolean;
  exact: boolean;
  path: string;
}

const CNRoutes = ({
  header,
  isProtected = false,
  component: Component,
  ...rest
}: Props) => {
  const authState = store.getState().auth;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LOGOUT());
    window.location.href = '/login';
  };

  // eslint-disable-next-line no-unused-vars
  const { fetch: verifyUser } = useAxios(
    {
      method: 'get',
      url: '/auth',
      headers: {
        Authorization: `Bearer ${authState.accessToken}`,
      },
    },
    (err, res) => {
      if (err) {
        logout();
      } else {
        if (res.status === 200 || res.status === 204 || res.status === 203) {
          return;
        } else {
          logout();
        }
      }
    },
  );

  useEffect(() => {});

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
