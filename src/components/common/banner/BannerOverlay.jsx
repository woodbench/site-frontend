import { Box } from '@mui/material';

export const BannerOverlay = () => {
  const overlayBase = {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '500px',
    pointerEvents: 'none',
  };
  return (
    <>
      <Box sx={{ ...overlayBase, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
      <Box
        sx={{
          ...overlayBase,
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.7) 0%, transparent 100%)',
        }}
      />
    </>
  );
};
