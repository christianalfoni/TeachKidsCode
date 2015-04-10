import React from 'react';
import Formsy from 'formsy-react';
import {
  Input
} from 'react-bootstrap';

var KeywordChooser = React.createClass({
  mixins: [Formsy.Mixin],
  getInitialState() {
    return {
      keywords: [
        'JavaScript',
        'HTML',
        'CSS',
        'Ruby'
      ]
    };
  },
  toggleCheckbox(keyword, event) {
    var keywords = this.getValue();
    if (event.target.checked) {
      keywords.push(keyword);
      this.setValue(keywords);
    } else {
      keywords.splice(keywords.indexOf(keyword), 1);
      this.setValue(keywords);
    }
  },
  renderKeywordCheckbox(keyword, index) {
    return (
      <Input
        type="checkbox"
        label={keyword}
        onChange={this.toggleCheckbox.bind(this, keyword)}
        checked={this.getValue().indexOf(keyword) >= 0}
      />
    );
  },
  render() {
    return (
      <div>
        <span>{this.getErrorMessage()}</span>
        {this.state.keywords.map(this.renderKeywordCheckbox)}
      </div>
    );
  }
})

export default KeywordChooser;
