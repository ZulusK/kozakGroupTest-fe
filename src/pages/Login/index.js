import React, { Component } from 'react';
import { connect } from 'react-redux';
// import style from './styles.scss';
import { Field, reduxForm } from 'redux-form';
import * as authSelectors from '../../reducers/auth/selectors';
import * as authActions from '../../reducers/auth/actions';
import { Redirect } from 'react-router-dom';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import withMainLayout from '../../hoc/withMainLayout';

class Login extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={{ pathname: '/' }} />;
    } else {
      return (
        <Section>
          <Hero color="primary">
            <Hero.Body>
              <Container>
                <Heading>Hero title Primary</Heading>
                <Heading subtitle size={3}>
                  Subtitle
                </Heading>
              </Container>
            </Hero.Body>
          </Hero>
        </Section>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  signin: userData => dispatch(authActions.signin(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(withMainLayout(Login)));
