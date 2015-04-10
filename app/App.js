import React from 'react';
import Toolbar from './components/Toolbar.js';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


var App = React.createClass({
  render: function () {
    return (
      <div>
        <Toolbar/>
      <Grid>
        <Row className='show-grid'>
          <Col md={12}>

          </Col>
        </Row>
      </Grid>
      </div>
    ); 
  }
});

export default App;
