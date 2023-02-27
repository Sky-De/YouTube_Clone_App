// { video: { id: { videoId }, snippet } }

import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants";

const VideoCard = ({ video }) => {
   const { id: { videoId }, snippet } = video;
    console.log(videoId);
    console.log(snippet);

  return (
    <Card sx={{width: {md : "320px", xs: "100%"}, boxShadow:"none", borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width : "100%", height: 180}}/>
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e" , height: "106px"}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelUrl}
                    <CheckCircle sx={{ fontSize:12, color:"gray", ml: "5px"}}/>
                </Typography>
            </Link>
        </CardContent>
        
    </Card>
  )
}

export default VideoCard;