import React, { Component } from 'react';
import { compose } from 'redux';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Header from '../containers/Header';
import withNotifications from './withNotifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const withMainLayout = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div>
          <Header />
          <Hero color="white" size="fullheight">
            <Hero.Body>
              <Container>
                <WrappedComponent {...this.props} />
              </Container>
            </Hero.Body>
          </Hero>
        </div>
      );
    }
  };
};
const hoc = compose(
  withNotifications,
  withMainLayout
);
export default hoc;
