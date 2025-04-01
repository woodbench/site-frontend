import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useCreateEntryMutation } from '../../store/services/api';

export const EntryJsonForm = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedObject, setParsedObject] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [createEntry, { isLoading, isError }] = useCreateEntryMutation();

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    setError('');
    setSuccessMessage('');
  };

  const handleValidate = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setParsedObject(parsed);
      setError('');
    } catch (err) {
      setParsedObject(null);
      setError('El JSON no es válido. Por favor, revisalo.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!parsedObject) {
      setError('Por favor, validá el JSON antes de enviarlo.');
      return;
    }

    try {
      await createEntry(parsedObject).unwrap();
      setSuccessMessage('Entrada creada con éxito.');
      setJsonInput('');
      setParsedObject(null);
    } catch (err) {
      console.log(err.data.message);
      setError('Hubo un problema al crear la entrada: ' + err.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="jsonInput">Pegá tu JSON aquí:</label> */}
      <TextField
        id="jsonInput"
        multiline
        rows={25}
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Pegá aquí el objeto en formato JSON"
        sx={{ width: '100%', margin: '10px' }}
      />
      <Box>
        <Button onClick={handleValidate} disabled={isLoading}>
          Validar JSON
        </Button>
        <Button variant="outlined" type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
      </Box>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
};
