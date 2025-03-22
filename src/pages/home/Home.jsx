import { Grid2 } from "@mui/material";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { Banner } from "../../components/common/banner/Banner";
import { FeaturedPosts } from "./FeaturedPosts";
import { RecentPosts } from "./RecentPosts";

export const Home = () => {
  const { posts, isLoading, error } = useBlogPosts();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 2);

  return (
    <>
      <Banner />
      <Grid2 container>
        <Grid2 size={2}></Grid2>
        <Grid2 size={8}>
            <FeaturedPosts posts={featuredPosts} />
            <RecentPosts posts={recentPosts} />
        </Grid2>
        <Grid2 size={2}></Grid2>
      </Grid2>
    </>
  );
};
