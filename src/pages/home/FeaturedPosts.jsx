import { Typography } from "@mui/material";
import { PostCard } from "../../components/common/PostCard";
import { useTranslation } from "react-i18next";

export const FeaturedPosts = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" sx={{ marginTop: '30px', marginBottom: '15px' }}>
        {t('featuredPosts.title')}
      </Typography>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};
