import React from 'react';
import EditorToolbar from './EditorToolbar';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: ''
    };

    this.handleTextareaMouseUp = this.handleTextareaMouseUp.bind(this);
  }

  handleTextareaMouseUp(event) {
    const target = event.target;
    const selection = target.value.substring(target.selectionStart, target.selectionEnd);
    console.debug('Selection:', selection);
  }

  render() {
    return (
      <div className="editor-wrapper">
        <div className="editor--toolbar">
          <EditorToolbar selection={this.state.selection} />
        </div>
        <textarea
          id="editor"
          className="textarea"
          value={this.props.input}
          onChange={this.props.onChange}
          onMouseUp={this.handleTextareaMouseUp}
        />
      </div>
    );
  }
}

export default Editor;
