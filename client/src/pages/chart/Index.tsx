import { useState, ChangeEvent, FormEvent } from 'react';
import SimpleForm from './UiForm';
import { useFormchatSchemaMutation } from '../../store/chatApi/chat';

const ChartIndex = () => {
  const [formState, setFormState] = useState<{ title: string; description: string }>({
    title: '',
    description: '',
  });
  const [postChat] = useFormchatSchemaMutation();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setImageFile(selectedFile);

      // Convert image to base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { title, description } = formState;
    postChat({ title, description, imageUrl: imagePreview ? imagePreview : '' });
  };

  return (
    <>
      <SimpleForm
        formState={formState}
        setFormState={setFormState}
        imagePreview={imagePreview}
        imageFile={imageFile}
        onChangeHandle={onChangeHandle}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ChartIndex;
