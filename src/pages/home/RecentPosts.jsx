import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { PostCard } from "../../components/common/PostCard";

export const RecentPosts = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" sx={{ marginTop: '30px', marginBottom: '15px' }}>
        {t('recentPosts.title')}
      </Typography>
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid key={post.id} size={{ xs: 12, md: 6 }}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
