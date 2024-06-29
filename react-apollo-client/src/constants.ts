// It is better to store APIs in .env files in real apps
export const API_URL = 'https://graphqlzero.almansi.me/api'; 

export const APP_TITLE = 'React Apollo Client';
export const POSTS_LOADING_TITLE = 'Loading...';

export const MIN_TEXT_LENGTH = 0;
export const MAX_TITLE_LENGTH = 50;
export const MAX_BODY_LENGTH = 300;

export const FIELD_MIN_LENGTH_ERROR_MESSAGE = 'Field cannot be empty';
export const TITLE_MAX_LENGTH_ERROR_MESSAGE = `Title cannot exceed ${MAX_TITLE_LENGTH} characters`;
export const BODY_MAX_LENGTH_ERROR_MESSAGE = `Body cannot exceed ${MAX_BODY_LENGTH} characters`;

export const POST_FETCHING_ERROR_MESSAGE =
  'Failed to fetch posts. Please try again.';
export const POST_UPDATING_GENERAL_ERROR_MESSAGE =
  'Failed to update post. Please try again.';
