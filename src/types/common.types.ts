/* export interface Props {
  post: Post;
} */

export interface Post {
  _id: string;
  postTitle: string;
  postBody: string;
  postImg: string;
  postDate: number;
  isRelevant: boolean;
  likes: number;
  bookmarks: number;
  postOwner: string;
  hashtags: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

interface Hashtags {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CreatePostData {
  id?: string;
  postTitle: string;
  postBody: string;
  postImg: string;
  hashtags: Hashtags;
}

export interface postSuccess {
  success: boolean;
  message?: string;
  data?: Post;
}
export interface User {
  name: {
    first: string;
    last: string;
  };
  _id: string;
  location: string;
  picture: string;
  joined: number;
  work: string;
  description: string;
  login?: LoginData;
}

export interface UserState {
  success: boolean;
  data?: User;
}

export interface PostState {
  success: boolean;
  data?: Post[];
}

export interface LoginData {
  email: string;
  password: string;
}
