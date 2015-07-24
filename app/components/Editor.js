import React from 'react';
import {Mixin} from 'cerebral-react-immutable-store';
import MTRC from 'markdown-to-react-components';
import {
  Row,
  Col,
  Input,
  Button
} from 'react-bootstrap';

MTRC.configure({});

const TextareaStyle = {
  outline: 'none',
  width: '100%',
  height: 'calc(100% - 49px)',
  resize: 'none',
  padding: 10,
  border: '1px solid #DDD',
  borderRadius: 3
};

const PreviewStyle = {
  overflowY: 'scroll',
  height: '100%',
  border: '1px solid #DDD',
  borderRadius: 3,
  padding: 10
};

const Editor = React.createClass({
  mixins: [Mixin],
  getStatePaths() {
    return {
      isSaving: ['isSaving'],
      file: ['file']
    };
  },
  getInitialState() {
    return {
      markdown: null
    };
  },
  componentDidMount() {
    if (this.state.file.content) {
      this.setState({
        markdown: MTRC(this.state.file.content).tree
      });
    }
  },
  componentWillUpdate(nextProps, nextState) {
    if (nextState.file.content !== this.state.file.content) {
      this.setState({
        markdown: MTRC(nextState.file.content).tree
      });
    }
  },
  render() {
    return (
      <Row className='show-grid' style={{height: '100%'}}>
        <Col md={6} style={PreviewStyle}>
          {this.state.markdown}
        </Col>
        <Col md={6} style={{height: '100%'}}>
          <Row>
            <Col md={8}>
              <Input
                type="text"
                placeholder="Insert filename..."
                addonAfter=".md"
                value={this.state.file.name.replace('.md', '')}
                disabled={this.state.isSaving}
                onChange={(e) => this.signals.fileNameChanged(true, {fileName: e.target.value})}/>
            </Col>
            <Col md={4}>
              <Button
                className="pull-right"
                bsStyle="success"
                style={{marginLeft: 10}}
                disabled={!this.state.file.content.length || !this.state.file.name.length || this.state.isSaving}
                onClick={() => this.signals.saveClicked()}>Save</Button>
              <Button
                className="pull-right"
                bsStyle="primary"
                disabled={this.state.isSaving}
                onClick={() => this.signals.publishClicked()}>Publish</Button>
            </Col>
          </Row>
          <textarea
            style={TextareaStyle}
            disabled={this.state.isSaving}
            onChange={(e) => this.signals.fileContentChanged(true, {fileContent: e.target.value})}
            value={this.state.file.content}/>
        </Col>
      </Row>
    );
  }
});

export default Editor;
