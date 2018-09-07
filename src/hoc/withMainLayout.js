import React, { Component } from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Header from '../containers/Header';

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

export default withMainLayout;
