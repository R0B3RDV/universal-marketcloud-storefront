import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';

export default class FAQ extends Component {

  render() {
    return (
      <div>
        <Helmet title="FAQ"/>
        <Header title="FAQ" />

        <Container>
          <Subheader>Questions & answers will be gathered here.</Subheader>
        </Container>
      </div>
    );
  }
}