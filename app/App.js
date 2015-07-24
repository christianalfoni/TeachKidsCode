import React from 'react';
import Toolbar from './components/Toolbar.js';
import Editor from './components/Editor.js';
import Files from './components/files.js';
import {Mixin} from 'cerebral-react-immutable-store';
import {
  Grid
} from 'react-bootstrap';

var App = React.createClass({
  mixins: [Mixin],
  getStatePaths() {
    return {
      view: ['view']
    };
  },
  render() {
    return (
      <div style={{height: '100%', paddingTop: 72}}>
        <Toolbar/>
        <Grid style={{height: 'calc(100% - 10px)'}}>
          {this.state.view === 'editor' ? <Editor/> : <Files/>}
        </Grid>
      </div>
    );
  }
});

export default App;
