export interface Post {
  id?: string;
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

export interface CreatePostData {
  id?: string;
  postTitle: string;
  postBody: string;
  postImg: string;
  postDate: number;
  isRelevant: boolean;
  likes: number;
  bookmarks: number;
  postOwner: string;
  hashtagsFirst: string;
  hashtagsSecond: string;
  hashtagThird: string;
  hashtagFourth: string;
}
