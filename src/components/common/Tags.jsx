// React
import React, { useState } from 'react';

// React Router
import { Link } from 'react-router-dom';

// MUI
import { Box, Paper, Typography, Chip } from '@mui/material';

// Translation
import { useTranslation } from 'react-i18next';

/**
 * Componente para renderizar una lista de tags con opciones flexibles.
 *
 * @param {Object} props - Props del componente.
 * @param {Array} props.tags - Lista de tags.
 * @param {string} [props.title] - Título de la sección (opcional).
 * @param {boolean} [props.withPaper] - Si debe envolver los tags en un Paper (default: true).
 * @param {Object} [props.containerSx] - Estilos personalizados para el contenedor.
 * @param {Object} [props.tagSx] - Estilos personalizados para los tags.
 * @param {string} [props.variant] - Variante de renderizado ("default", "chip").
 * @param {Function} [props.renderTag] - Función personalizada para renderizar los tags.
 * @param {number} [props.maxTags] - Número máximo de tags visibles inicialmente.
 * @param {Function} [props.onTagClick] - Evento al hacer clic en un tag.
 */
export const Tags = ({
  tags,
  title,
  withPaper = true,
  containerSx = {},
  tagSx = {},
  variant = 'default',
  renderTag,
  maxTags,
  onTagClick,
  ...otherProps
}) => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const renderDefaultTag = (tag) => {
    if (variant === 'chip') {
      return (
        <Chip
          key={tag}
          label={`#${tag}`}
          component={Link}
          to={`/tags/${encodeURIComponent(tag)}`}
          clickable
          sx={{
            margin: '4px',
            backgroundColor: '#1976d2',
            color: 'white',
            ...tagSx,
          }}
          onClick={() => onTagClick?.(tag)}
        />
      );
    }

    return (
      <Typography
        component={Link}
        key={tag}
        to={`/tags/${encodeURIComponent(tag)}`}
        onClick={() => onTagClick?.(tag)}
        sx={{
          color: 'white',
          textDecoration: 'none',
          backgroundColor: 'background.default',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.875rem',
          ...tagSx,
        }}
      >
        #{tag}
      </Typography>
    );
  };

  const visibleTags = maxTags && !showAll ? tags.slice(0, maxTags) : tags;

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const content = (
    <>
      {title && <Typography variant="h4">{title}</Typography>}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          mt: title ? 1 : 0,
          ...containerSx,
        }}
      >
        {visibleTags.map((tag) => (renderTag ? renderTag(tag) : renderDefaultTag(tag)))}
        {maxTags && tags.length > maxTags && (
          <Typography
            onClick={toggleShowAll}
            sx={{ margin: '4px', color: 'text.secondary', fontSize: '0.875rem' }}
          >
            {showAll ? t('tags.seeLess') : t('tags.seeMore')}
          </Typography>
        )}
      </Box>
    </>
  );

  return withPaper ? (
    <Paper sx={{ padding: 2, mt: 5 }} elevation={5} {...otherProps}>
      {content}
    </Paper>
  ) : (
    content
  );
};
