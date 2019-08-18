import {Action} from '@ngrx/store';
import {Comment} from '../../_models/comment';

export enum CommentsActionTypes {
  LOAD_COMMENTS = '[Comment] Load Comments',
  LOAD_COMMENTS_SUCCESS = '[Comment] Load Comments Success',
  LOAD_COMMENTS_FAIL = '[Comment] Load Comments Fail',
  CREATE_COMMENT = '[Comment] Create Comment',
  CREATE_COMMENT_SUCCESS = '[Comment] Create Comment Success',
  CREATE_COMMENT_FAIL = '[Comment] Create Comment Fail',
  REMOVE_COMMENT = '[Comment] Remove Comment',
  REMOVE_COMMENT_SUCCESS = '[Comment] Remove Comment Success',
  REMOVE_COMMENT_FAIL = '[Comment] Remove Comment Fail'
}

export class GetAllComments implements Action {
  readonly type = CommentsActionTypes.LOAD_COMMENTS;

  constructor() {}
}
export class GetAllCommentsSuccess implements Action {
  readonly type = CommentsActionTypes.LOAD_COMMENTS_SUCCESS;

  constructor(public payload: Comment[]) {}
}
export class GetAllCommentsFail implements Action {
  readonly type = CommentsActionTypes.LOAD_COMMENTS_FAIL;

  constructor(public payload: string) {}
}

export class CreateComment implements Action {
  readonly type = CommentsActionTypes.CREATE_COMMENT;

  constructor(public payload: Comment) {}
}
export class  CreateCommentSuccess implements Action {
  readonly type = CommentsActionTypes.CREATE_COMMENT_SUCCESS;

  constructor(public payload: Comment) {}
}
export class CreateCommentFail implements Action {
  readonly type = CommentsActionTypes.CREATE_COMMENT_FAIL;

  constructor(public payload: string) {}
}

export class RemoveComment implements Action {
  readonly type = CommentsActionTypes.REMOVE_COMMENT;

  constructor(public payload: number) {}
}
export class RemoveCommentSuccess implements Action {
  readonly type = CommentsActionTypes.REMOVE_COMMENT_SUCCESS;

  constructor(public payload: any) {}
}
export class RemoveCommentFail implements Action {
  readonly type = CommentsActionTypes.REMOVE_COMMENT_FAIL;

  constructor(public payload: string) {}
}

export type CommentsActions =
  GetAllComments |
  GetAllCommentsSuccess |
  GetAllCommentsFail |
  CreateComment |
  CreateCommentSuccess |
  CreateCommentFail |
  RemoveComment |
  RemoveCommentSuccess |
  RemoveCommentFail;








