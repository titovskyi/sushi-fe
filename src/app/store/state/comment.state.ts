import {Comment} from '../../_models/comment';

export interface CommentStateInterface {
  comments: Comment[];
  loading: boolean;
  loaded: boolean;
}

export const initialCommentState: CommentStateInterface = {
  comments: [
    {id: 0, name: '', header: '', comment: '', createdAt: null}
  ],
  loading: false,
  loaded: true
};
