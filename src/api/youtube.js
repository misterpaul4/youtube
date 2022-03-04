  import axios from 'axios';

  const KEY = "AIzaSyCmhWXY2j3yq_xdSwGGwfOZNajbQmrQisU";

  export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
      part: 'snippet',
      maxResults: 10,
      key: KEY,
      type: 'video'
    },
  });
  