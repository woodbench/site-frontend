// React
import { useState } from 'react';

// MUI
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

// Translation
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

  const tooltipText =
    i18n.language === 'es' ? t('tooltips.changeLanguageEn') : t('tooltips.changeLanguageEs');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
          gap: { xs: 0, md: 1 },
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
            mt: { xs: 0.5, md: 0 },
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
