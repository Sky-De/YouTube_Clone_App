import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { Videos, ChannelCard } from "./"
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  console.log(videos);
  console.log(channelDetail);
  
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));


  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background:'linear-gradient(90deg, rgba(25,80,119,1) 0%, rgba(161,138,138,1) 50%, rgba(25,80,119,1) 100%)',zIndex:10, height: '300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-150px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sm={{ mr: { sm: '100px' }}}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail;