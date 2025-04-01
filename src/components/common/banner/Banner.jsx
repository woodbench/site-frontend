// Paquetes externos
import { CardMedia, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Componentes internos
import { BannerOverlay } from './BannerOverlay';
import { BannerContent } from './BannerContent';

// Assets
import bannerTop from '../../../assets/images/bannerTopHome.webp';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ position: 'relative', zIndex: 0 }}>
      <CardMedia
        component="img"
        height="500"
        image={bannerTop}
        alt={t('banner.alt')}
        sx={{ width: '100%', objectFit: 'cover' }}
      />
      {/* Superposiciones */}
      <BannerOverlay />
      {/* Contenido */}
      <BannerContent
        title={t('banner.title')}
        subtitle={t('banner.subtitle')}
        inspiration={t('banner.inspiration')}
        buttonText={t('banner.button')}
        buttonLink="/blog"
      />
    </Box>
  );
};
