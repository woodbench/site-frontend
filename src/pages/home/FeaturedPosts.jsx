// Translation
import { useTranslation } from 'react-i18next';

// MUI Core
import { Typography } from '@mui/material';

// Internal components
import { PostCard } from '../../components/common/PostCard';

export const FeaturedPosts = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
        {t('featuredPosts.title')}
      </Typography>

      {posts.length === 0 ? (
        <Typography variant="body1">{t('featuredPosts.empty')}</Typography>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </>
  );
};
