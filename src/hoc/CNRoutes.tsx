import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Comp from '../components/organisms';

interface Props {
  header?: boolean;
  component: any;
  children: any;
  exact: boolean;
  path: string;
}

export class CNRoutes extends Component<Props> {
  static get propTypes() {
    return {
      header: PropTypes.bool,
      component: PropTypes.any,
      children: PropTypes.any,
      exact: PropTypes.bool,
      path: PropTypes.string,
    };
  }

  render() {
    const Component = this.props.component;
    const Header = this.props.header;

    return (
      <>
        {Header && <Comp.Header />}
        <Component />
      </>
    );
  }
}

export default CNRoutes;
