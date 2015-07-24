import React from 'react';
import {Mixin} from 'cerebral-react-immutable-store';
import MTRC from 'markdown-to-react-components';
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from 'react-bootstrap';

var Files = React.createClass({
  mixins: [Mixin],
  getStatePaths() {
    return {
      files: ['files'],
      currentFileIndex: ['currentFileIndex'],
      isLoadingFiles: ['isLoadingFiles']
    };
  },
  renderFile(file, index) {
    return (
      <ListGroupItem key={index} href="#" active={index === this.state.currentFileIndex} onClick={() => this.signals.currentFileChanged({
        currentFileIndex: index
      })}>{file.name}</ListGroupItem>
    );
  },
  render() {
    if (this.state.isLoadingFiles) {
      return (
        <h4>Loading files...</h4>
      );
    }
    return (
      <Row>
        <Col md={4}>
          <ListGroup>
            {this.state.files.map(this.renderFile)}
          </ListGroup>
        </Col>
        <Col md={8}>
          <div><Button bsStyle="primary" onClick={() => this.signals.editCurrentFileClicked()}>Edit</Button></div>
          {this.state.files.length ? MTRC(this.state.files[this.state.currentFileIndex].content).tree : null}
        </Col>
      </Row>
    );
  }
});

export default Files;
