import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Videos, SideBar} from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("New");
  const [videos,setVideos] = useState([]);
  

  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{ sx:"column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md:"91vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}} >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{
          mt: 1.5,
          color: "#fff"
        }}>Copyright 2023 SkyDe App</Typography>
      </Box>

      <Box p={3} sx={{ overflowY: 'auto', height: "85vh", flex: 2}}>
        <Typography
         variant="h4"
         fontWeight="bold"
         mb={2}
         sx={{ color: "#fff"}}>
          {selectedCategory}<span style={{ color: '#F31503'}}> Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed