// 🔹 React
import { useEffect, useState } from 'react';

// 🔹 React Router
import { Link, useParams, useNavigate } from 'react-router-dom';

// 🔹 Traducción
import { useTranslation } from 'react-i18next';

// 🔹 Terceros
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// 🔹 MUI
import { Box, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

// 🔹 Utils y componentes internos
import { removeFrontMatter } from '../../utils/removeFrontMatter';
import { formatDate } from '../../utils/formatDate';
import { Tags } from '../../components/common/Tags';
import { NotFound } from '../not-found/NotFound';

// 🔹 API (comentada por ahora)
// import { useGetEntryByIdQuery } from '../../store/services/api';

export const BlogEntry = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [post, setPost] = useState(null);
  const [hasRedirected, setHasRedirected] = useState(false); // Estado para evitar múltiples redirecciones
  const { postId } = useParams();
  // const { data: entry, error, isLoading } = useGetEntryByIdQuery();

  // Cargar metadata de la entrada
  useEffect(() => {
    fetch('/src/content/blogEntries.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const foundPost = data.find((entry) => Object.values(entry.slugs).includes(postId));
        if (foundPost) {
          setPost(foundPost);
        }
      })
      .catch((error) => {
        console.error('Error fetching blog metadata:', error);
      });
  }, [postId]);

  // Redirigir al slug correcto al cambiar de idioma
  useEffect(() => {
    if (post && !hasRedirected) {
      const localizedSlug = post.slugs[i18n.language];
      const targetUrl = `/blog/${localizedSlug}`;
      if (window.location.pathname !== targetUrl) {
        console.log('Triggering navigation to:', targetUrl);
        setHasRedirected(true); // Evita que la redirección ocurra múltiples veces
        navigate(targetUrl, { replace: true });
      }
    }
  }, [i18n.language, post, navigate, hasRedirected]);

  // Cargar contenido Markdown
  useEffect(() => {
    if (post) {
      const slugForLanguage = post.slugs[i18n.language];
      fetch(`/src/content/blog/${i18n.language}/${slugForLanguage}.md`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((text) => {
          const cleanedContent = removeFrontMatter(text);
          setContent(cleanedContent);
        })
        .catch((error) => {
          console.error('Error fetching the Markdown file:', error);
          setContent(t('blogEntry.errorLoadingContent'));
        });
    }
  }, [post, i18n.language, t]);

  if (!post) {
    return <NotFound />;
  }

  const formattedDate = formatDate(post.publishDate, i18n.language);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <IconButton component={Link} to="/Blog">
          <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
        {t('blogEntry.backToBlog')}

        <Grid container>
          <Grid size={2}></Grid>
          <Grid size={8}>
            <Typography variant="h1" gutterBottom>
              {post.title[i18n.language]}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontStyle: 'italic', mb: 5 }}>
              {t('blogEntry.publishedOn')} {formattedDate}
            </Typography>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      display: 'block',
                      margin: '0 auto',
                    }}
                    {...props}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
            <Tags tags={post.tags[i18n.language]} title={t('blogEntry.tagsTitle')} variant="chip" />
          </Grid>
          <Grid size={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};
