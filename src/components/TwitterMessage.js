import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars
    };
  }

  handleEvent = (event)=>{
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleEvent}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;