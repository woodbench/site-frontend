// React Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// MUI Core
import { Button, Box, Typography } from '@mui/material';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2.5rem', md: '4rem' },
          color: '#ddd',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}
      >
        {t('notFound.title')}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', md: '1.5rem' },
          color: '#aaa',
          marginBottom: '30px',
        }}
      >
        {t('notFound.message')}
      </Typography>
      <Button
        component={Link}
        to="/blog"
        variant="outlined"
        size="large"
        sx={{
          backgroundColor: '#555',
          border: 'solid 2px white',
          width: '30%',
          color: '#fff',
          padding: '15px 20px',
          borderRadius: '10px',
          textTransform: 'none',
          mt: 8,
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#444',
          },
        }}
      >
        {t('notFound.button')}
      </Button>
    </Box>
  );
};
