import { useState } from 'react';

import { Post as PostType, PostFields, PostErrors } from '../types';
import { validateField, validationSchema } from '../utils/validation';

export const usePostFields = (initialPost: PostType) => {
  const [postDetails, setPostDetails] = useState<PostFields>({
    title: initialPost.title,
    body: initialPost.body,
  });

  const [errors, setErrors] = useState<PostErrors>({});
  const [editingField, setEditingField] = useState<keyof PostFields | null>(
    null
  );

  const handleFieldChange = (field: keyof PostFields, value: string) => {
    const error = validateField(field, value, validationSchema);

    setErrors({ ...errors, [field]: error });
    setPostDetails({ ...postDetails, [field]: value });
  };

  const startEditing = (field: keyof PostFields) => {
    if (editingField) return;

    setEditingField(field);
  };

  const stopEditing = () => {
    setEditingField(null);
  };

  return {
    postDetails,
    errors,
    editingField,
    handleFieldChange,
    startEditing,
    stopEditing,
    setErrors,
  };
};
