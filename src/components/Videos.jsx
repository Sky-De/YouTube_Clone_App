import { Box, Stack } from "@mui/system";
import { VideoCard, ChannelCard} from "./";

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return "Loading...";

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