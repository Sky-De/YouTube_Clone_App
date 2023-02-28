import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos,setVideos] = useState([]);
  const { searchTerm } = useParams();
  

  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
     <Box p={3} sx={{ overflowY: 'auto', height: "85vh", flex: 2, border: "2px solid red"}}>
          <Typography
           variant="h4"
           fontWeight="bold"
           mb={2}
           sx={{ color: "#fff"}}>
           Search Results for:  <span style={{ color: '#F31503'}}> {searchTerm}</span>
          </Typography>
          <Videos videos={videos}/>
     </Box>
  )
}

export default SearchFeed;