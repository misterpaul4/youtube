import React from "react";

class VideoContainer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.vid;
    const title = video.snippet.title;
    const id = video.id.videoId;
    const description = video.snippet.description;

    return(
      <div className="selected-vid-container">
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${id}`} title={title} />
        </div>

        <div className="ui segment">
          <h1 className="ui header">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default VideoContainer;
