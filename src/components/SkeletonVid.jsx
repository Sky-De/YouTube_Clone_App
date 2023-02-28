import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

export const SkeletonVid = (direction) => {
  let skeletons = [];
  for (let i = 0; i < 50; i++) {
    skeletons.push(i);
  }
  return (
    <Stack direction={ "row" } flexWrap="wrap" justifyContent="center" gap={2}>
      {skeletons.map((item,index) => (
        <Box sx={{width:{xs:"100%",sm:"358px",md:"auto"}}} key={index}>
          <Stack spacing={1} sx={{backgroundColor:"lightgray",maxWidth:"322px"}}>
           <Skeleton variant="rounded" width={322} height={200} />
             <Stack  gap={1} py={4} px={2}>
               <Skeleton variant="rounded" width={250} height={24} />
               <Skeleton variant="rounded" width={200} height={15} />
             </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

