import React from "react";
import YouTube from "react-youtube";
import './YoutubeBlock.css';

 class MovieClip extends React.Component {
    render() {
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <YouTube className = "VideoBlock" videoId="jfKfPfyJRdk?si" onReady={this._onReady} id="video"/>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;