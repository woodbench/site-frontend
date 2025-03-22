import React from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const handleSocialMedia = (media) => {
    const links = {
      fb: 'https://www.facebook.com/people/WoodBench/61568348423541/',
      ig: 'https://www.instagram.com/thewoodbench',
    };

    const goTo = links[media];
    if (goTo) {
      window.open(goTo, '_blank');
    }
  };

  return (
    <Paper sx={{ marginTop: '50px', padding: '20px', bottom: 0 }}>
      <Grid container>
        <Grid size={{xs: 4}}></Grid>
        {/* Redes Sociales */}
        <Grid 
          size={{ xs: 12, md: 4 }}
          sx={{p:3}}
        >
          <Typography variant="h4" sx={{mr: 3}}>
            {t('footer.socialMedia')}
          </Typography>
          <IconButton onClick={() => handleSocialMedia('fb')}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={() => handleSocialMedia('ig')}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid size={{xs: 4}}></Grid>
      </Grid>
      <Grid container>
        <Grid size={{md: 4}}></Grid>
        {/* Contacto */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            p: 3
            // display: 'flex',
            // alignItems: { xs: 'flex-start', md: 'center' },
            // flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>
            {t('footer.contactUs')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              // ml: { xs: 0, md: 3 },
              flexDirection: { xs: 'row', md: 'row' },
            }}
          >
            <AlternateEmailIcon sx={{ mr: 1 }} />
            <Typography>{t('footer.email')}</Typography>
          </Box>
        </Grid>
        <Grid size={{md: 4}}></Grid>
      </Grid>
    </Paper>
  );
};
