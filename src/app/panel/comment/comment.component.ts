import { Component, OnInit } from '@angular/core';
import {PanelStateInterface} from '../store/state/panel.state';
import {GetAllComments, RemoveComment} from '../../store/actions/comments.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  public comments: Comment[] = [];

  constructor(
    private store: Store<PanelStateInterface>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllComments());
    this.store.subscribe((res: any) => {
      this.comments = res.comments.comments;
    });
  }

  removeComment(commentId) {
    this.store.dispatch(new RemoveComment(commentId));
  }

}
