import React from "react";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div class="preview-wrapper">
        <div id="preview" />
      </div>
    );
  }
}
