import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2'
import { Box, IconButton, Paper, Typography } from '@mui/material';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export const BlogEntry = () => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const { postId } = useParams();
// console.log(content)
  useEffect(() => {
    fetch(`/src/content/blog/${postId}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response.text)
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => {
        console.error('Error fetching the Markdown file:', error);
        setContent('# Error\nNo se pudo cargar el contenido.');
      });
  }, [postId]);
  useEffect(() => {
    fetch('/src/content/blogEntries.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const post = data.filter((post) => post.slug === postId);
        const rawTags = post[0].tags
        setTags(rawTags)
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setPosts([]);
      });
  }, []);
console.log('posts', tags)
  return (
    <Box sx={{ /*maxWidth: 'md',*/ /*mx: 'auto',*/ p: 2 }}>
      <IconButton component={Link} to="/Blog">
        <ArrowCircleLeftIcon fontSize="large" />
      </IconButton>
      Volver al Blog
      
      <Grid container>
        <Grid size={2}></Grid>
        <Grid size={8}>
        <ReactMarkdown 
          components={{
            img: ({ node, ...props }) => (
              <img
                style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                {...props}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
        <Paper sx={{ padding: 2, mt: 5 }} elevation={5}>
          <Typography variant="h4">Tags de la Entrada</Typography>
          <Typography sx={{fontSize: '12px', fontStyle: 'italic', mb: 2}}>
            (Hace click sobre un tag para ver todas las entradas con el mismo tag)
          </Typography>
          {tags.map((tag) => (
            <Typography 
              component={Link} 
              key={tag} 
              to={`/tags/${tag}`}
              sx={{ color: 'white', mr: 1, textDecoration: 'none'}}
            >
              #{tag}
            </Typography>
          ))}
        </Paper>
        </Grid>
        <Grid size={2}></Grid>
      </Grid>
    </Box>
  );
};
