import React from "react";
import hl from "highlight.js";
import "highlight.js/styles/github.css";
import marked from "marked";
import DOMPurify from "dompurify";

const markedRenderer = new marked.Renderer();
markedRenderer.link = function(href, title, text) {
  let code = `<a href="${href}"`;

  if (title) {
    code += ` title="${title}"`;
  }

  code += ` class="link" target="_blank" rel="noopener noreferrer">
    ${text}
  </a>
  `;

  return code;
};

markedRenderer.blockquote = function(quote) {
  if (!quote) {
    return "";
  }

  return `
  <blockquote class="blockquote">
    ${quote}
  </blockquote>
  `;
};

const markedOptions = {
  breaks: true,
  gfm: true,
  xhtml: true,
  renderer: markedRenderer,
  highlight: function(code) {
    return hl.highlightAuto(code).value;
  }
};

class Preview extends React.Component {
  getContent() {
    let content = "";

    if (this.props.content) {
      content = DOMPurify.sanitize(marked(this.props.content, markedOptions), {
        ADD_ATTR: ["target"]
      });
    }

    return {
      __html: content
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
