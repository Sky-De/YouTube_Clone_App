import { Box, Stack } from "@mui/system";
import { VideoCard, ChannelCard} from "./";
import { SkeletonVid } from "./SkeletonVid";

const Videos = ({ videos, direction }) => {
  
  // SKELETON for loading
  if(!videos?.length) return (<SkeletonVid direction={direction}/>)

  return (
    <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="center" gap={2}>
      {videos && videos.map((item,index) => (
        <Box sx={{width:{xs:"100%",sm:"358px",md:"auto"}}} key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} bd="solid"/>}
          {item.id.videoId && <VideoCard video={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos