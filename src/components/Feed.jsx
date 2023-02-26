import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Videos, SideBar} from "./";

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{ sx:"column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md:"91vh"}, border: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}} >
        <SideBar/>
        <Typography className="copyright" variant="body2" sx={{
          mt: 1.5,
          color: "#fff"
        }}>Copyright 2023 SkyDe App</Typography>
      </Box>

      <Box p={3} sx={{ overflowY: 'auto', height: "85vh", flex: 2, border: "2px solid red"}}>
        <Typography
         variant="h4"
         fontWeight="bold"
         mb={2}
         sx={{ color: "#fff"}}>
          New<span style={{ color: '#F31503'}}> Videos</span>
        </Typography>
        <Videos/>
      </Box>
    </Stack>
  )
}

export default Feed