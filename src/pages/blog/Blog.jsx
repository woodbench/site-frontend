import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PostCard } from '../../components/common/PostCard';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { useGetEntryCardsQuery } from '../../store/services/api';

export const Blog = () => {
  const { t } = useTranslation();
  // const { posts, isLoading, error } = useBlogPosts();
  const { data: entries, isLoading, isError } = useGetEntryCardsQuery()
console.log(entries)
  if (isLoading) {
    return <Typography>Cargando...</Typography>;
  }

  if (isError) {
    return <Typography>Error: {isError}</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1" sx={{ my: 4 }}>
        {t('blog.title')}
      </Typography>

      <Grid container spacing={2}>
        {entries.map((entry) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={entry._id}>
            <PostCard post={entry} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
