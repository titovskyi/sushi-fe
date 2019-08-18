import {CommentStateInterface, initialCommentState} from '../state/comment.state';
import {CommentsActions, CommentsActionTypes} from '../actions/comments.actions';

export function commentReducer(state = initialCommentState, action: CommentsActions): CommentStateInterface {
  switch (action.type) {
    case CommentsActionTypes.LOAD_COMMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        comments: action.payload
      };
    }
    // TODO ERROR
    case CommentsActionTypes.LOAD_COMMENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        comments: []
      };
    }

    case CommentsActionTypes.CREATE_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      };
    }
    // TODO ERROR
    case CommentsActionTypes.CREATE_COMMENT_FAIL: {
      return {
        ...state
      };
    }

    case CommentsActionTypes.REMOVE_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      };
    }
    // TODO ERROR
    case CommentsActionTypes.REMOVE_COMMENT_FAIL: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
