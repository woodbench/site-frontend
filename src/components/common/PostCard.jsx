import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const PostCard = ({ post }) => {
    const { t, i18n } = useTranslation();
    const { title, excerpt, publishDate, image, slugs, readingTime } = post;
console.log(publishDate)
    // Acceder al slug localizado
    const slug = slugs[i18n.language];

    // Acceder al título y resumen localizados
    const localizedTitle = title[i18n.language];
    const localizedSummary = excerpt[i18n.language];

    const formattedDate = new Date(publishDate).toLocaleDateString(
        i18n.language === 'es' ? 'es-ES' : 'en-US',
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }
    );

    return (
        <Card sx={{ marginBottom: '20px' }}>
            {image && (
                <Link to={`/blog/${slug}`}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image}
                        alt={localizedTitle}
                    />
                </Link>
            )}
            <CardContent>
                <Typography 
                    variant="h4" 
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {localizedTitle}
                </Typography>
                <Grid container>
                    <Grid size={6}>
                        <Typography variant="body2" color="text.secondary">
                            {formattedDate}
                        </Typography>
                    </Grid>
                    <Grid size={6} sx={{ textAlign: 'right' }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                gap: '4px',
                            }}
                        >
                            <MenuBookIcon fontSize="small" />
                            {readingTime} min
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {localizedSummary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/blog/${slug}`}>
                    {t('buttons.readMore')}
                </Button>
            </CardActions>
        </Card>
    );
};
