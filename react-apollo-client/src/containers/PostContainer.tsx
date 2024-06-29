import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import type { Post as PostType, PostFields, PostFieldsEnum } from '../types';

import { UPDATE_POST_API } from '../api';
import { PostComponent } from '../components';
import { usePostFields, useUnsavedChanges } from '../hooks';
import { POST_UPDATING_GENERAL_ERROR_MESSAGE } from '../constants';

interface PostContainerProps {
  post: PostType;
  onEditingDone: (post: PostType) => void;
}

export const PostContainer: React.FC<PostContainerProps> = ({
  post,
  onEditingDone,
}) => {
  const {
    postDetails,
    errors,
    editingField,
    handleFieldChange,
    startEditing,
    stopEditing,
    setErrors,
  } = usePostFields(post);

  const [updatePost] = useMutation(UPDATE_POST_API);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleFieldBlur = async (field: keyof PostFields) => {
    if (postDetails[field] === post[field]) {
      stopEditing();
      setHasUnsavedChanges(false);
      return;
    }

    if (errors[field]) {
      return;
    }

    try {
      await updatePost({
        variables: { id: post.id, input: { ...postDetails } },
      });

      onEditingDone({ ...postDetails, id: post.id });
      stopEditing();
      setHasUnsavedChanges(false);
    } catch (error) {
      setErrors({
        ...errors,
        generalError: POST_UPDATING_GENERAL_ERROR_MESSAGE,
      });

      console.error(error);
    }
  };

  const handleFieldChangeWithUnsavedFlag = (
    field: PostFieldsEnum,
    value: string
  ) => {
    handleFieldChange(field, value);
    setHasUnsavedChanges(true);
  };

  useUnsavedChanges(hasUnsavedChanges, async () => {
    if (editingField) {
      await handleFieldBlur(editingField);
    }
  });

  return (
    <PostComponent
      post={post}
      postDetails={postDetails}
      errors={errors}
      editingField={editingField}
      handleFieldChange={handleFieldChangeWithUnsavedFlag}
      startEditing={startEditing}
      handleFieldBlur={handleFieldBlur}
    />
  );
};
