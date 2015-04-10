import React from 'react';
import {
  Modal,
  Button
} from 'react-bootstrap';

var CreateNewCourseModal = React.createClass({
  render: function () {
    return (
      <Modal bsStyle='primary' title='Modal heading' onRequestHide={this.props.onRequestHide}>
        <div className='modal-body'>
          This modal is controlled by our custom trigger component.
        </div>
        <div className='modal-footer'>
          <Button onClick={this.handleToggle}>Close</Button>
        </div>
      </Modal>
    );
  }
});

export default CreateNewCourseModal;
