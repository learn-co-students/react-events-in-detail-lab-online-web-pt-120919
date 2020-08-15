import React, {Component} from 'react';

export default class DelayedButton extends Component {
  handleClick = (e) => {
    console.log(this.props);
    e.persist();
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay);
  }
  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}