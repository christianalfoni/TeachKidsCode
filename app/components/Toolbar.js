import React from 'react';
import actions from './../actions.js';
import CreateNewCourseLink from './toolbar/CreateNewCourseLink.js';
import {
  Navbar,
  Nav
} from 'react-bootstrap';

var Toolbar = React.createClass({
  render: function () {
    return (
      <Navbar brand='React-Bootstrap' inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
          <CreateNewCourseLink/>
        </Nav>
      </Navbar>
    );
  }
});

export default Toolbar;
