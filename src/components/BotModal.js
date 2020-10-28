import React, { Component } from 'react'
import {
  Button,
  Modal,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Nav
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { addBot } from '../actions/botActions';
import { v4 as uuid } from 'uuid';

class BotModal extends Component {
  state = {
    show: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    
    const newBot = {
      id:  uuid(),
      name: this.state.name
    }

    this.props.addBot(newBot);

    this.toggle();
  };
  
  render() {
    return(
      <div>
        <Nav.Link 
          href="#add-component-for-sign-in-modal"
          onClick={this.toggle}
        >
          Sign In
        </Nav.Link>

        <Modal
          show={this.state.show}
          toggle={this.toggle}
          onHide={this.toggle}
        >
          <Modal.Header closeButton>
            Sign in to your account
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <FormLabel for="email">Email</FormLabel>
                <FormControl 
                  type="email"
                  palceholder="email"
                  onChange={this.onChange}
                />
                <FormLabel for="bot">Password</FormLabel>
                <FormControl 
                  type="password"
                  palceholder="password"
                  onChange={this.onChange}
                />
                <Button
                  variant="dark"
                  className="mt-2"
                  block
                  onClick={this.onSubmit}
                >
                  Sign in
                </Button>
              </FormGroup>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bot: state.bot
});

export default connect(mapStateToProps, { addBot })(BotModal);