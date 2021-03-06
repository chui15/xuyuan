import React from 'react';

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({
      intervalId: intervalId
    });
  }

  render() {
    return (
      <button className="scroll" onClick={() => { this.scrollToTop(); }}>
        <span className="up-arrow">&#8593;</span>
      </button>
    );
  }
}

export default ScrollButton;
