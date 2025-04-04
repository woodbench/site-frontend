// React
import React from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// MUI Core
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';

// Utils and internal documents
import { PostCard } from '../../components/common/PostCard';
import { useBlogPosts } from '../../hooks/useBlogPosts';
// import { useGetEntryCardsQuery } from '../../store/services/api';

export const Blog = () => {
  const { t } = useTranslation();

  // 🔄 Para usar cuando se conecte al backend / for use when it's connected to the backend:
  // const { data: entries, isLoading, isError } = useGetEntryCardsQuery();
  // TODO: Reemplazar useBlogPosts con useGetEntryCardsQuery cuando se conecte al backend real
  const { posts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return <Typography>Cargando...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1" sx={{ my: 4 }}>
        {t('blog.title')}
      </Typography>

      <Grid container spacing={2}>
        {posts.map((entry) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={entry._id}>
            <PostCard post={entry} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
