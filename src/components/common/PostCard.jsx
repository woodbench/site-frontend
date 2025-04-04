// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// MUI
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Utils and internal components
import { formatDate } from '../../utils/formatDate';

export const PostCard = ({ post }) => {
  const { t, i18n } = useTranslation();
  const { title, excerpt, publishDate, image, slugs, readingTime } = post;

  const slug = slugs[i18n.language];
  const localizedTitle = title[i18n.language];
  const localizedSummary = excerpt[i18n.language];
  const formattedDate = formatDate(publishDate, i18n.language);

  return (
    <Card sx={{ marginBottom: '20px' }}>
      {image && (
        <Link to={`/blog/${slug}`}>
          <CardMedia component="img" height="240" image={image} alt={localizedTitle} />
        </Link>
      )}
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {localizedTitle}
        </Typography>
        <Grid container>
          <Grid size={6}>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
          </Grid>
          <Grid size={6} sx={{ textAlign: 'right' }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '4px',
              }}
            >
              <MenuBookIcon fontSize="small" />
              {readingTime} min
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {localizedSummary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/blog/${slug}`}>
          {t('buttons.readMore')}
        </Button>
      </CardActions>
    </Card>
  );
};
