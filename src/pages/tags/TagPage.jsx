// React Router
import { useParams } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// MUI Core
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Hooks and internal components
import { PostCard } from '../../components/common/PostCard';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export const TagPage = () => {
  const { t, i18n } = useTranslation();
  const { posts, isLoading, error } = useBlogPosts();
  const { tag } = useParams();

  const filteredPosts = posts.filter(
    (post) => Array.isArray(post.tags[i18n.language]) && post.tags[i18n.language].includes(tag)
  );

  if (isLoading) {
    return <Typography>{t('tagPage.loading')}</Typography>;
  }

  if (error) {
    return <Typography>{t('tagPage.error', { error })}</Typography>;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h1" sx={{ mb: 3 }}>
        {t('tagPage.title', { tag })}
      </Typography>
      <Grid container spacing={2}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, md: 6 }}>
              <PostCard post={post} />
            </Grid>
          ))
        ) : (
          <Typography>{t('tagPage.noEntries')}</Typography>
        )}
      </Grid>
    </Box>
  );
};
