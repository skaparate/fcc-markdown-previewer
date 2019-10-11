import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

class Preview extends React.Component {
  getContent() {
    let content = '';

    if (this.props.content) {
      content = DOMPurify.sanitize(marked(this.props.content));
    }

    return {
      __html: content,
    };
  }

  render() {
    return (
      <div className="preview-wrapper">
        <div id="preview" dangerouslySetInnerHTML={this.getContent()} />
      </div>
    );
  }
}

export default Preview;
