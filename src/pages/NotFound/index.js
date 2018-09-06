import React, { Component } from 'react';
import style from './styles.scss';
import withMainLayout from '../../hoc/withMainLayout';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Container from 'react-bulma-components/lib/components/container';

class NotFound extends Component {
  render() {
    return (
      <Hero.Body>
        <Card style={{ margin: 'auto' }}>
          <Card.Image
            size="4by3"
            style={{ width: '500px' }}
            src="http://s.quickmeme.com/img/41/41c535a10ad277f147d3138b6195ffe3713731c330f5719ec3fb4ed4e117a013.jpg"
          />
          <Card.Content>
            <Media>
              <Media.Item renderAs="figure" position="left">
                <Image
                  renderAs="p"
                  size={64}
                  alt="Batman"
                  src="https://massolutions.biz/wp-content/uploads/2014/12/e5a06942fa42823c88be5f3a834e063d-fantastic-art-bat-family.jpg"
                />
              </Media.Item>
              <Media.Item>
                <Heading size={4}>The Batman, superhero</Heading>
                <Heading subtitle size={6}>
                  @supermenIsLooser
                </Heading>
              </Media.Item>
            </Media>
            <Content>
              404! Page does not exist
              <a href="#1">#help</a> <a href="#2">#alert</a>
              <br />
            </Content>
          </Card.Content>
        </Card>
      </Hero.Body>
    );
  }
}

export default withMainLayout(NotFound);
