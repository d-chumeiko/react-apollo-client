import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import type { Post as PostType } from '../types';

import { GET_POSTS_API } from '../api';
import { Error, Loading } from '../components';
import { POST_FETCHING_ERROR_MESSAGE } from '../constants';
import { PostContainer } from './PostContainer';



const PostListContainer: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS_API, {
    variables: {
      limit: 15, // Added limit as it’s not ok to return all items for the real app
    },
  });

  const [localPosts, setLocalPosts] = useState<PostType[]>([]);

  const posts = localPosts?.length > 0 ? localPosts : data?.posts?.data;

  useEffect(() => {
    if (data && data.posts && !localPosts.length) {
      setLocalPosts(data.posts.data);
    }
  }, [data, localPosts]);

  const handleEditingDone = (updatedPost: PostType) => {
    setLocalPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  if (loading) return <Loading />;

  if (error) {
    console.error(error.message);

    return <Error message={POST_FETCHING_ERROR_MESSAGE} />;
  }

  return posts.map((post: PostType) => (
    <PostContainer
      key={post.id}
      post={post}
      onEditingDone={handleEditingDone}
    />
  ));
};

export default PostListContainer;
