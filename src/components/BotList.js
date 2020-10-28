import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getBots, deleteBot } from '../actions/botActions';
import PropTypes from 'prop-types';

class BotList extends Component {
  componentDidMount() {
    this.props.getBots();
  }

  onDeleteClick = (id) => {
    this.props.deleteBot(id);
  }

  render() {
    const { bots } = this.props.bot;

    return(
      <Container>
        <ListGroup>
          {bots.map(({ id, name }) =>(
            <ListGroupItem>
              <Button
                className="btn-danger mr-2"
                size="sm"
                onClick={this.onDeleteClick.bind(this, id)}
              >
                &times;
              </Button>
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

BotList.propTypes = {
  getBots: PropTypes.func.isRequired,
  bot: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  bot: state.bot
});

export default connect(
  mapStateToProps,
  { getBots, deleteBot }
)(BotList);