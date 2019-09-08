import {Injectable} from '@angular/core';
import {CommentService} from '../../_services/comment.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {
  CommentsActionTypes,
  CreateComment, CreateCommentFail,
  CreateCommentSuccess,
  GetAllComments,
  GetAllCommentsFail,
  GetAllCommentsSuccess, RemoveComment, RemoveCommentFail, RemoveCommentSuccess
} from '../actions/comments.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {AddError} from '../actions/error.actions';

@Injectable()
export class CommentsEffects {
  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) {}

  @Effect()
  // @ts-ignore
  getAllComments$: Observable<Action> = this.actions$.pipe(
    ofType<GetAllComments>(CommentsActionTypes.LOAD_COMMENTS),
    mergeMap(() => {
      return this.commentService.getAllComments().pipe(
        map((comments: any[]) => new GetAllCommentsSuccess(comments)),
        catchError((err) => of(new GetAllCommentsFail(err)))
      );
    })
  );

  @Effect()
  // @ts-ignore
  createComment$: Observable<Action> = this.actions$.pipe(
    ofType<CreateComment>(CommentsActionTypes.CREATE_COMMENT),
    map((action: CreateComment) => action.payload),
    mergeMap((comment: any) => {
      return this.commentService.createComment(comment).pipe(
        map((newComment: any) => new CreateCommentSuccess(newComment)),
        catchError(err => of(new AddError(err)))
      );
    })
  );

  @Effect()
  // @ts-ignore
  removeComment$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveComment>(CommentsActionTypes.REMOVE_COMMENT),
    map((action: RemoveComment) => action.payload),
    mergeMap((commentId: number) => {
      return this.commentService.removeComment(commentId).pipe(
        map((result: any) => new RemoveCommentSuccess(commentId)),
        catchError(err => of(new AddError(err)))
      );
    })
  );
}
