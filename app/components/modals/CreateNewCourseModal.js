import React from 'react';
import Formsy from 'formsy-react';
import TextInput from './../formElements/TextInput.js';
import KeywordChooser from './../formElements/KeywordChooser.js';
import {
  Modal,
  Button
} from 'react-bootstrap';

var CreateNewCourseModal = React.createClass({
  componentDidMount() {
    this.getDOMNode().querySelector('input').focus();
  },
  render() {
    return (
      <Modal bsStyle='warning' title='Create new course' onRequestHide={this.props.onRequestHide}>
        <div className='modal-body'>
          <Formsy.Form>
            <TextInput
              ref="titleInput"
              name="title"
              label="Course title"
              required
            />
            <TextInput 
              name="description"
              label="Give a short description"
              required
            />
            <KeywordChooser 
              name="keywords" 
              validations="isLength:1:3" 
              validationError="You have to choose between 1 and 3" 
              value={[]}
            />
          </Formsy.Form>
        </div>
        <div className='modal-footer'>
          <Button onClick={this.handleToggle}>Close</Button>
        </div>
      </Modal>
    );
  }
});

export default CreateNewCourseModal;
