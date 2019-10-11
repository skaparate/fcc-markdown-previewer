import * as React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';

import './styles.css';
import Editor from './Editor';
import Preview from './Preview';

library.add(fab, faLink);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="preview-container">
        <Editor input={this.state.input} onChange={this.onEditorChange} />
        <Preview content={this.state.input} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
