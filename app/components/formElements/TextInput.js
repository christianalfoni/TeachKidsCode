import React from 'react';
import Formsy from 'formsy-react';
import {
  Input
} from 'react-bootstrap';

var TextInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.target.value);
  },
  render() {
    var bsStyle = this.showRequired() ? 'warning' : this.showError() ? 'error' : null;
    return (
      <Input 
        type='text' 
        value={this.getValue()} 
        bsStyle={bsStyle}
        onChange={this.changeValue}
        label={this.props.label}
        labelClassName={this.props.labelClassName}
        wrapperClassName={this.props.wrapperClassName}
        placeholder={this.props.placeholder}
      />
    );
  }
})

export default TextInput;
