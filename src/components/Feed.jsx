import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{ sx:"column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md:"92vh"}, border: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}} >
        <SideBar/>
        <Typography className="copyright" variant="body2" sx={{
          mt: 1.5,
          color: "#fff"
        }}>Copyright 2023 SkyDe App</Typography>
      </Box>
    </Stack>
  )
}

export default Feed