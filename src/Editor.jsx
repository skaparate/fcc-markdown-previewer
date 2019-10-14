import React from "react";
import { Form } from "react-bootstrap";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: ""
    };

    this.handleTextareaMouseUp = this.handleTextareaMouseUp.bind(this);
    this.onEditorFocus = this.onEditorFocus.bind(this);
    this.onEditorBlur = this.onEditorBlur.bind(this);
  }

  handleTextareaMouseUp(event) {
    const target = event.target;
    const selection = target.value.substring(
      target.selectionStart,
      target.selectionEnd
    );
    console.debug("Selection:", selection);
  }

  onEditorFocus(event) {
    if ('function' === typeof this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onEditorBlur(event) {
    if ('function' === typeof this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  render() {
    return (
      <div className="editor-wrapper">
        <Form.Control
          as="textarea"
          id="editor"
          rows="15"
          cols="60"
          className="textarea form-control rounded-0 border-0"
          value={this.props.input}
          onChange={this.props.onChange}
          onMouseUp={this.handleTextareaMouseUp}
          onFocus={this.onEditorFocus}
          onBlur={this.onEditorBlur}
        ></Form.Control>
      </div>
    );
  }
}

export default Editor;
