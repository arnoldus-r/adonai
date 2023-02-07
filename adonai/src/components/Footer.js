import React from 'react';
import { Typography } from '@mui/material';

export default function Footer() {

  return (
    <div>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {'Adonai Jireh '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}