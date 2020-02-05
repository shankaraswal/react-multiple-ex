import React, { Component, Fragment } from 'react';
import ScreenCapture from './ScreenCapture'
import './ScreenCapture.css'
import Static from '../common/Static';

class ScreenCaptureMain extends Component {
  state = {
    name: 'S Aswal',
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
              Drag mouse, select area and leave mouse, you will found your cropped image....
            </p>
            <button className="mt-4 btn btn-danger" onClick={onStartCapture}>Capture</button>
            <h3 className="mt-4">Captured Screen Shot</h3>
            <div className="mt-4 container capturedImgPH">
              <img src={screenCapture} />
            </div>
          </Fragment>
        )}
      </ScreenCapture>
    );
  }
}
export default ScreenCaptureMain;
