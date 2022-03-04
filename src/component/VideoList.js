import React from "react";
import VideoCard from "./VideoCard";

class VideoList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const videos = this.props.vids.map(vid => <VideoCard key={vid.id.videoId} vid={vid} handSelectedVideo={this.props.handSelectedVideo} />);

    return(
      <div className="ui items reset video-list">
        {videos}
      </div>
    )
  }
}

export default VideoList;
