import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { PostCard } from '../../components/common/PostCard';

export const RecentPosts = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
        {t('recentPosts.title')}
      </Typography>

      {posts.length === 0 ? (
        <Typography variant="body1">{t('recentPosts.empty')}</Typography>
      ) : (
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, md: 6 }}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
