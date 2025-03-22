import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { EntryJsonForm } from '../../components/form/EntryJsonForm';
import { RichTextEditor } from '../../components/form/RichTextEditor';

export const CreateEntryPage = () => {
    return (
        <Grid container>
            <Grid size={2}></Grid>
            <Grid size={8}>
                <Box>
                    <Typography variant="h1">Crear una nueva entrada</Typography>
                    <Typography>Pegá el JSON de tu entrada en el formulario y envialo.</Typography>
                    <EntryJsonForm />
                    <RichTextEditor />
                </Box>
            </Grid>
            <Grid size={2}></Grid>
        </Grid>
    );
};
