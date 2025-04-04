// Translation
import { useTranslation } from 'react-i18next';

// MUI Core
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const Nosotros = () => {
  const { t } = useTranslation('textos');
  const paragraphs = t('about.paragraphs', { returnObjects: true });
  const highlighted = t('about.highlighted');
  const signature = t('about.signature');

  return (
    <Grid container sx={{ paddingTop: '20px' }}>
      <Grid size={2}></Grid>
      <Grid size={8}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {t('about.title')}
        </Typography>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, mt: 2 }}>
          {t('about.subtitle')}
        </Typography>
        {paragraphs.map((paragraph, index) => (
          <Typography key={index} sx={{ mb: 1, fontSize: '18px' }}>
            {paragraph}
          </Typography>
        ))}
        <Typography sx={{ mb: 3, fontWeight: 600, fontSize: '20px' }}>{highlighted}</Typography>
        <Typography sx={{ textAlign: 'right', fontSize: '22px', fontStyle: 'italic' }}>
          {signature}
        </Typography>
      </Grid>
      <Grid size={2}></Grid>
    </Grid>
  );
};
