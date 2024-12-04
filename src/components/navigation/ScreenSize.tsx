'use client';

import { Box, Chip, useTheme, useMediaQuery } from '@mui/material';

const ScreenSize = () => {
  const nodeEnv = process.env.NODE_ENV;

  // Define breakpoints with MUI's useMediaQuery
  const theme = useTheme();
  const isSX = useMediaQuery(theme.breakpoints.only('xs'));
  const isSM = useMediaQuery(theme.breakpoints.only('sm'));
  const isMD = useMediaQuery(theme.breakpoints.only('md'));
  const isLG = useMediaQuery(theme.breakpoints.only('lg'));
  const isXL = useMediaQuery(theme.breakpoints.only('xl'));

  // Array of screen sizes with conditions and styles
  const screenSizes = [
    { label: 'SX', visible: isSX, color: 'purple' },
    { label: 'SM', visible: isSM, color: 'teal' },
    { label: 'MD', visible: isMD, color: 'blue' },
    { label: 'LG', visible: isLG, color: 'green' },
    { label: 'XL', visible: isXL, color: 'red' },
  ];

  if (nodeEnv === 'production') return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
      }}>
      {screenSizes.map(
        ({ label, visible, color }) =>
          visible && (
            <Chip
              key={label}
              label={label}
              sx={{
                backgroundColor: color,
                color: 'white',
                padding: theme.spacing(1),
                fontSize: theme.typography.body2.fontSize,
                fontWeight: 'bold',
              }}
            />
          )
      )}
    </Box>
  );
};

export default ScreenSize;
