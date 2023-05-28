import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column" } }}>
      <Box
        sx={{
          background: "#000",
          height: { sx: "auto" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {" "}
      </Box>
    </Stack>
  );
};

export default Feed;
