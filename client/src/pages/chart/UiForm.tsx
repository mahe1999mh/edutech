import React, { ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

interface SimpleFormProps {
  formState: any;
  setFormState: React.Dispatch<React.SetStateAction<any>>;
  imagePreview: string | null;
  imageFile: File | null;
  onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

const SimpleForm: React.FC<SimpleFormProps> = ({
  formState,
  imagePreview,
  onChangeHandle,
  handleImageChange,
  handleSubmit
}) => {

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
        mt: 5,
      }}
      onSubmit={handleSubmit}
    >
     
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        name="title"
        value={formState.title}
        onChange={onChangeHandle}
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        name="description"
        value={formState.description}
        onChange={onChangeHandle}
      />

      <Button
        variant="contained"
        component="label"
        sx={{ mt: 2 }}
      >
        Upload Image
        <input
          type="file"
          hidden
          onChange={handleImageChange}
        />
      </Button>

      {imagePreview && (
        <div>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Preview:
          </Typography>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '8px' }} />
        </div>
      )}

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default SimpleForm;
