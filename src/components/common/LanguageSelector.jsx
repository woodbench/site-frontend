import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    handleCloseMenu();
  };

  const currentLanguage = i18n.language === 'es' ? 'Español' : 'English';

  // Tooltip con texto en el idioma contrario
  const tooltipText =
    i18n.language === 'es' ? t('tooltips.changeLanguageEn') : t('tooltips.changeLanguageEs');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' }, // En móvil, coloca los elementos en columna
          textAlign: { xs: 'center', md: 'left' }, // Centra el texto en móvil
          gap: { xs: 0, md: 1 }, // Sin espacio en móvil, con espacio en desktop
        }}
      >
        <Tooltip title={tooltipText}>
          <IconButton onClick={handleOpenMenu} color="inherit">
            <TranslateIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Typography
          variant="body1"
          sx={{
            fontSize: '0.80rem',
            mt: { xs: 0.5, md: 0 }, // Margen superior en móvil
          }}
        >
          {currentLanguage}
        </Typography>
      </Box>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={() => changeLanguage('es')}>Español (🇪🇸)</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>English (🇺🇸)</MenuItem>
      </Menu>
    </>
  );
};
