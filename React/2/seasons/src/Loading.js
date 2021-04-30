import React from "react";

const Load = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

export default Load;

/* class Clock extends React.Component {
    state = { currTime : null }

    componentDidMount() {
        setInterval(() => {
            this.setState({ currTime : new Date().toLocaleTimeString() })
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                The time is: {this.state.currTime}
            </div>
        );
    }
} */
/*
class Clock extends React.Component {
  state = { currentTime: null };

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <div className="time">The time is: {this.state.currentTime}</div>;
  }
}
 */
