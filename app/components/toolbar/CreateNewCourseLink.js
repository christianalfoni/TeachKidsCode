import React from 'react';
import actions from './../../actions.js';
import state from './../../state.js';
import CreateNewCourseModal from './../modals/CreateNewCourseModal.js';
import {
  NavItem,
  Glyphicon,
  OverlayMixin
} from 'react-bootstrap';

var CreateNewCourseLink = React.createClass({
  mixins: [OverlayMixin, state.mixin],
  cursors: {
    showNewCourseModal: ['home', 'showNewCourseModal']
  },
  showNewCourseModal(event) {
    event.preventDefault();
    actions.showNewCourseModal();
  },
  hideNewCourseModal() {
    actions.hideNewCourseModal();
  },
  render() {
    return (
      <NavItem eventKey={1} onClick={this.showNewCourseModal}>
        <Glyphicon glyph='plus'/> Create new course
      </NavItem>
    );
  },
  renderOverlay() {
    if (!this.state.cursors.showNewCourseModal) {
      return <span/>;
    }
    return <CreateNewCourseModal onRequestHide={this.hideNewCourseModal}/>
  }
});

export default CreateNewCourseLink;
