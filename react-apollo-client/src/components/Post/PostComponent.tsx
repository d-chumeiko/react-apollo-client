import React from 'react';

import { Post as PostType, PostFieldsEnum, PostFields } from '../../types';

import { Error } from '../Error';
import { Body } from './Body';
import { EditableInput } from './EditableInput';
import { EditableTextarea } from './EditableTextarea';
import { Title } from './Title';

import styles from './Post.module.scss';

interface PostComponentProps {
  post: PostType;
  postDetails: PostFields;
  errors: { [key: string]: string };
  editingField: keyof PostFields | null;
  handleFieldChange: (field: PostFieldsEnum, value: string) => void;
  startEditing: (field: PostFieldsEnum) => void;
  handleFieldBlur: (field: PostFieldsEnum) => void;
}

export const PostComponent: React.FC<PostComponentProps> = ({
  post,
  postDetails,
  errors,
  editingField,
  handleFieldChange,
  startEditing,
  handleFieldBlur,
}) => (
  <article className={styles.post}>
    <form className={styles.postForm}>
      {editingField === PostFieldsEnum.Title ? (
        <EditableInput
          value={postDetails.title}
          error={errors.title}
          onChange={(value) => handleFieldChange(PostFieldsEnum.Title, value)}
          onBlur={() => handleFieldBlur(PostFieldsEnum.Title)}
        />
      ) : (
        <Title
          title={post.title}
          onClick={() => startEditing(PostFieldsEnum.Title)}
        />
      )}

      {editingField === PostFieldsEnum.Body ? (
        <EditableTextarea
          value={postDetails.body}
          error={errors.body}
          onChange={(value) => handleFieldChange(PostFieldsEnum.Body, value)}
          onBlur={() => handleFieldBlur(PostFieldsEnum.Body)}
        />
      ) : (
        <Body
          body={post.body}
          onClick={() => startEditing(PostFieldsEnum.Body)}
        />
      )}
    </form>

    {errors.generalError && <Error message={errors.generalError} />}
  </article>
);
