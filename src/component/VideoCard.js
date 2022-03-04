const VideoCard = (props) => {
  const thumbnail = props.vid.snippet.thumbnails.medium.url;
  const title = props.vid.snippet.title;
  const handleVideoClick = props.handSelectedVideo;

  const onVideoClick = () => {
    handleVideoClick(props.vid);
  }

  return (
  <div className="item video-card-container" onClick={onVideoClick}>
    <div className="image">
      <img src={thumbnail} alt="imag" />
    </div>
    <div className="content">
      <h1 className="header">{title}</h1>
    </div>
  </div>
  )
}

export default VideoCard;
