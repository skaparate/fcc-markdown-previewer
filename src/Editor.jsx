import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
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
      <div className="editor-wrapper">
        <div className="editor--toolbar">
          <nav className="navbar">
            <ul>
              <li>
                <button
                  className="editor--toolbar-button button is-light"
                  type="button"
                >
                  <FontAwesomeIcon icon="link" />
                  <span className="is-sr-only">Insert Link</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <textarea
          id="editor"
          className="textarea"
          value={this.state.input}
          onChange={this.onEditorChange}
        />
      </div>
    );
  }
}

export default Editor;
