import React from 'react';
import { useMutation } from '@apollo/client';

import type { Post as PostType, PostFields } from '../types';

import { UPDATE_POST_API } from '../api';
import { PostComponent } from '../components';
import { usePostFields } from '../hooks';
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

  const handleFieldBlur = async (field: keyof PostFields) => {
    if (postDetails[field] === post[field]) {
      stopEditing();
      return;
    }

    const error = errors[field];
    if (error) {
      return;
    }

    try {
      await updatePost({
        variables: { id: post.id, input: { ...postDetails } },
      });

      onEditingDone({ ...postDetails, id: post.id });
      stopEditing();
    } catch (error) {
      setErrors({
        ...errors,
        generalError: POST_UPDATING_GENERAL_ERROR_MESSAGE,
      });

      console.error(error);
    }
  };

  return (
    <PostComponent
      post={post}
      postDetails={postDetails}
      errors={errors}
      editingField={editingField}
      handleFieldChange={handleFieldChange}
      startEditing={startEditing}
      handleFieldBlur={handleFieldBlur}
    />
  );
};
