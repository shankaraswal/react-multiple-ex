import React, { Component, Fragment } from 'react';
import ScreenCapture from './ScreenCapture'
import './ScreenCapture.css'
import Static from '../common/Static';

class ScreenCaptureMain extends Component {
  state = {
    name: 'GAMO',
    screenCapture: ''
  }

  handleScreenCapture = (screenCapture) => {
    this.setState({
      screenCapture
    })
  }

  render() {
    const { screenCapture } = this.state
    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <Fragment>
            <Static name={this.state.name} />
            <p>
              Start editing to see some magic happen :)
            </p>
            <button onClick={onStartCapture}>Capture</button>
            <h3>Captured Screen Shot</h3>
            <div className="capturedImgPH">
              <img src={screenCapture} />
            </div>
          </Fragment>
        )}
      </ScreenCapture>
    );
  }
}
export default ScreenCaptureMain;
