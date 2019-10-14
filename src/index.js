import * as React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Card, Modal, Button } from "react-bootstrap";

import "./styles.css";
import Editor from "./Editor";
import Preview from "./Preview";

library.add(fab, faLink);

class App extends React.Component {
  constructor(props) {
    super(props);
    const defaultContent = `
Markdown Previewer
==================

A simple project to write and preview Markdown code.

Editor
------

Everything You __write here__ using the markdown syntax will be converted to HTML in the previewer below.

### Some Markdown Examples
#### Headings

Append the hash and a space in fron of the heading (from 1 to 6)

# Heading 1
## Heading 2
### Heading 3
###### Heading 6

#### Code

You can use inline code \`<div></div>\` and blocks of code:

JavaScript
----------

\`\`\`javascript
console.log('Hello World!');
\`\`\`

C#
--

\`\`\`csharp
string s = "Hello,";
Console.Write("{0} World!", s);
\`\`\`

A long text:

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean sagittis finibus vulputate.
Donec elementum sem nunc, eget dictum sapien pellentesque non.

Lists:

* Item 1
* Item 2
* Item 3
  * Subitem 3-1
  * Subitem 3-2

Images:

![alt-text](https://camo.githubusercontent.com/9cf76f2bd4230c106e7ea7c8b557a5afb4df85d7/68747470733a2f2f7261772e6769746875622e636f6d2f6164616d2d702f6d61726b646f776e2d686572652f6d61737465722f7372632f636f6d6d6f6e2f696d616765732f69636f6e34382e706e67 "Markdown Logo")

Blockquotes:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis finibus vulputate. Donec elementum sem nunc, eget dictum sapien pellentesque non.

Nullam in nunc diam. Ut consectetur, turpis non volutpat malesuada, lorem ipsum sollicitudin quam, a dignissim ipsum purus vel elit.

Links:

[FreeCodeCamp](https://freecodecamp.org/)
[NicoMV - My Website](https://nicomv.com/)

And any other markdown syntax!

## Preview

The preview is where You can see the ouput of the editor (the parsed content).`;
    this.state = {
      input: defaultContent,
      classNames: "",
      showAboutModal: false
    };
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onEditorFocus = this.onEditorFocus.bind(this);
    this.onEditorBlur = this.onEditorBlur.bind(this);
    this.onShowAboutModal = this.onShowAboutModal.bind(this);
    this.onCloseAboutModal = this.onCloseAboutModal.bind(this);
  }

  onEditorChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  onEditorFocus(event) {
    this.setState({
      classNames: "shadow"
    });
  }

  onEditorBlur(event) {
    this.setState({
      classNames: ""
    });
  }

  onShowAboutModal(event) {
    event.preventDefault();
    this.setState({
      showAboutModal: true
    });
  }

  onCloseAboutModal() {
    this.setState({
      showAboutModal: false
    });
  }

  render() {
    const editorCardClasses = `p-0 ${this.state.classNames}`.trim();
    return (
      <div className="preview-container">
        <Nav className="justify-content-center mb-1">
          <Nav.Item>
            <Nav.Link onClick={this.onShowAboutModal}>About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container fluid="true">
          <Row>
            <Col md={12} lg={6} className="mb-2">
              <Card className={editorCardClasses}>
                <Card.Header>Editor</Card.Header>
                <Card.Body className="p-0">
                  <Editor
                    input={this.state.input}
                    onChange={this.onEditorChange}
                    onFocus={this.onEditorFocus}
                    onBlur={this.onEditorBlur}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={6}>
              <Card>
                <Card.Header>Preview</Card.Header>
                <Card.Body>
                  <Preview content={this.state.input} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Modal
          show={this.state.showAboutModal}
          onHide={this.onCloseAboutModal}
          id="about-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This project was developed for the FreeCodeCamp front end
              libraries projects by{" "}
              <a
                href="https://nicomv.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Nico MV's website"
              >
                Nicolas Mancilla Vergara
              </a>
              .
            </p>
            <p>Thanks to:</p>
            <ul>
              <li>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                , the library upon which this app is built.
              </li>
              <li>
                <a
                  href="https://marked.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marked
                </a>
                , a library to parse Markdown code.
              </li>
              <li>
                <a
                  href="https://cure53.de/purify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOMPurify
                </a>
                , a library to sanitize HTML.
              </li>
              <li>
                <a
                  href="https://highlightjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HighLight.js
                </a>
                , the library to highlight code.
              </li>
              <li>
                <a
                  href="https://freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FreeCodeCamp
                </a>
                , for all their great job
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onCloseAboutModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
