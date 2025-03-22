import { useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  Modifier,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
/* Proximas funcionalidades
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
*/
import './RichTextEditor.css';

export const RichTextEditor = ({ onSave }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const applyFontSize = (size) => {
    const selection = editorState.getSelection();
    let contentState = editorState.getCurrentContent();

    // Aplicar el tamaño de fuente
    contentState = Modifier.applyInlineStyle(contentState, selection, `FONTSIZE-${size}`);

    const newEditorState = EditorState.push(editorState, contentState, 'change-inline-style');
    setEditorState(EditorState.forceSelection(newEditorState, selection));
    setAnchorEl(null); // Cerrar el menú
  };

  const handleSave = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    console.log(JSON.stringify(rawContent, null, 2));
    onSave(rawContent);
  };

  return (
    <Box style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', minHeight: '200px' }}>
      <Box style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Inline styles */}
        <IconButton
          onClick={() => toggleInlineStyle('BOLD')}
          color={editorState.getCurrentInlineStyle().has('BOLD') ? 'primary' : 'default'}
        >
          <FormatBoldIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleInlineStyle('ITALIC')}
          color={editorState.getCurrentInlineStyle().has('ITALIC') ? 'primary' : 'default'}
        >
          <FormatItalicIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleInlineStyle('UNDERLINE')}
          color={editorState.getCurrentInlineStyle().has('UNDERLINE') ? 'primary' : 'default'}
        >
          <FormatUnderlinedIcon />
        </IconButton>

        {/* Font size */}
        <Divider orientation="vertical" flexItem />
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <FormatSizeIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {[12, 14, 16, 18, 20, 24, 28].map((size) => (
            <MenuItem key={size} onClick={() => applyFontSize(size)}>
              {size}px
            </MenuItem>
          ))}
        </Menu>

        {/* Clear styles */}
        <IconButton
          onClick={() => toggleInlineStyle('')}
          color="default"
        >
          <FontDownloadIcon />
        </IconButton>
      </Box>

      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
        placeholder="Escribí tu entrada aquí..."
      />

      <Button
        variant="contained"
        onClick={handleSave}
        style={{ marginTop: '20px' }}
      >
        Guardar
      </Button>
    </Box>
  );
};