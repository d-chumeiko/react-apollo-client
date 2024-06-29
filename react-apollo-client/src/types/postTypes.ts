export enum PostFieldsEnum {
  Title = 'title',
  Body = 'body',
}

export interface PostFields {
  title: string;
  body: string;
}

export interface Post extends PostFields {
  id: string;
}

export type PostErrors = {
  [key in keyof PostFields]?: string;
} & { generalError?: string };