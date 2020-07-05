import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class ScrollToTop extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount () {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render () {
    return (
      <div className="scroll-to-top">
        <button onClick={this.scrollToTop}>To the top&nbsp;<i className="fas fa-arrow-up"></i></button>
      </div>
  )}
}

export default ScrollToTop;
