import { useEffect, useState } from 'react';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/src/content/blogEntries.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err.message);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};
