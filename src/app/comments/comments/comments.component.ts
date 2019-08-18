import {Component, OnInit} from '@angular/core';
import {AppStateInterface} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {CreateComment, GetAllComments} from '../../store/actions/comments.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../_models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments: Comment[] = null;
  public commentForm: FormGroup;

  constructor(
    private store: Store<AppStateInterface>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      comment: ['', Validators.required]
    });

    this.store.dispatch(new GetAllComments());
    this.store.subscribe((res: any) => {
      this.comments = res.comments.comments;
    });
  }

  createComment() {
    const newComment: Comment = {
      id: null,
      name: this.commentForm.get('name').value,
      comment: this.commentForm.get('comment').value,
      createdAt: null
    };

    this.store.dispatch(new CreateComment(newComment));
    this.commentForm.reset();
  }

}
