import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Button, ButtonToolbar, ButtonGroup, Modal, Form } from 'react-bootstrap';

class EditorToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    if ('function' === typeof this.props.onActionPerformed) {
      this.props.onActionPerformed();
    }
  }

  onCloseLinkModal(event) {

  }

  render() {

    return (
      <div className="toolbar">
        <Nav className="navbar" role="navigation" aria-label="Toolbar">
          <Button onClick={() => false}>
            <FontAwesomeIcon icon="link" />
            <span className="sr-only">Insert Link</span>
          </Button>
        </Nav>
        <Modal show={false} onHide={this.onCloseLinkModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Label for="">Link Text</Form.Label>
              <Form.Control type="text" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onCloseLinkModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.onCloseLinkModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditorToolbar;
