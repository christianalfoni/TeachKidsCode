import React from 'react';
import {Mixin} from 'cerebral-react-immutable-store';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

var Toolbar = React.createClass({
  mixins: [Mixin],
  render() {
    return (
      <div style={{position: 'absolute', top: 0, width: '100%'}}>
        <Navbar brand='LærKidsaKode' inverse>
          <Nav eventKey={0}>
            <NavItem eventKey={1} onClick={() => this.signals.createFileClicked()}>Create file</NavItem>
            <NavItem eventKey={1} onClick={() => this.signals.openFileClicked()}>Open file</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

export default Toolbar;
