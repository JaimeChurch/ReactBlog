import React from 'react';
import { Box, Paper } from '@mui/material';

function SimplePaper({ children }) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
          margin: 1,
        }}
      >
        <Paper elevation={2} sx={{ padding: 2 }}>
          {children}
        </Paper>
      </Box>
    );
  }

  export default SimplePaper;