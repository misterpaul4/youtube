import React, { useState, useEffect } from 'react';
import SearchBar from './Search';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoContainer from './SelectedVideoContainer';

function App() {
  const [ videos, updateVideos ] = useState(null);
  const [videoSelected, updateVideoSelected] = useState(null);

  useEffect(() => {
    onSearchSubmit("nigeria");

    return null;
  }, []);

  const onSearchSubmit = async searchTerm => {
    const url = "/search"

    const response = await youtube.get(
      url,
      {
        params: {
          q: searchTerm
        },
      }
    );

    updateVideos(response.data.items);
    updateVideoSelected(null);
  }

  const handleVideoSelect = vid => {
    updateVideoSelected(vid);
  };

  const renderContent = 
    videos
    ?
    <>
      <SearchBar searchHandler={onSearchSubmit} />
      <div className='content-container'>
        {videoSelected ? <VideoContainer vid={videoSelected} /> : null}
        
        <VideoList vids={videos} handSelectedVideo={handleVideoSelect} />
      </div>
    </>
    :
  <span>...loading</span>;

  return (
    <div className='ui container' style={{
      marginTop: "20px"
    }}>
      {renderContent}
    </div>
  );
}

export default App;
