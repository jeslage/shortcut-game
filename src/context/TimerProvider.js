import React, { Component } from "react";

function getDefaultState() {
  return {
    isRunning: false,
    time: 0,
    timeList: []
  };
}

export const TimerContext = React.createContext();

class TimerProvider extends Component {
  state = getDefaultState();
  timerRef = null;

  startTimer = () => {
    this.setState(
      {
        isRunning: true
      },
      () => {
        this.timerRef = setInterval(() => {
          const { time } = this.state;
          this.setState({ time: time + 10 });
        }, 10);
      }
    );
  };

  stopTimer = () => {
    this.setState(
      {
        isRunning: false
      },
      () => {
        clearInterval(this.timerRef);
      }
    );
  };

  resetTimer = () => {
    this.setState(getDefaultState());
  };

  addShortcutTime = shortcut => {
    const { time, timeList } = this.state;
    const difference =
      timeList.length > 0
        ? time - timeList[timeList.length - 1].timePassed
        : time;

    this.setState({
      timeList: [...timeList, { timePassed: time, difference, ...shortcut }]
    });
  };

  render() {
    const { time, isRunning, timeList } = this.state;
    return (
      <TimerContext.Provider
        value={{
          time,
          isRunning,
          timeList,
          startTimer: this.startTimer,
          stopTimer: this.stopTimer,
          resetTimer: this.resetTimer,
          addShortcutTime: this.addShortcutTime
        }}
      >
        {this.props.children}
      </TimerContext.Provider>
    );
  }
}

export const TimerConsumer = TimerContext.Consumer;

export default TimerProvider;
