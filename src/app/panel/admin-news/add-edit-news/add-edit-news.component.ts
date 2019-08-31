import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../../store/state/app.state';
import {CreateNews, GetOneNews, UpdateNews} from '../../../store/actions/store-news.action';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.scss']
})
export class AddEditNewsComponent implements OnInit {
  public newsForm: FormGroup;
  public imagePath: any;
  public uploadedFile: File;

  private fileName: string;
  private newsId: string;
  private prevImage: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    private store: Store<AppStateInterface>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.newsForm = this.fb.group({
      id: [null],
      header: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit() {
    if (this.newsId) {
      this.store.dispatch(new GetOneNews(Number(this.newsId)));
      this.store.subscribe((res) => {
        if (res.storeNews.currentStoreNews.id) {
          const newsInfo = res.storeNews.currentStoreNews;
          this.prevImage = newsInfo.image;

          this.newsForm = this.fb.group({
            id: [newsInfo.id],
            header: [newsInfo.header, Validators.required],
            description: [newsInfo.description, Validators.required],
            image: [newsInfo.image]
          });

          this.imagePath = this.getSafeUrl(newsInfo.image);
        }
      });
    }
  }

  fileChange(element) {
    this.uploadedFile = element.target.files[0];

    const formData = new FormData();
    formData.append('upload', this.uploadedFile, this.uploadedFile.name);
    this.http.post('http://localhost:3000/api/upload', formData)
      .subscribe((response: any) => {
        this.fileName = response.filePath;
        this.imagePath = this.getSafeUrl(this.fileName);
      });
  }

  submitForm() {
    this.newsForm.patchValue({image: this.fileName});

    if (this.newsId) {
      const newNewsInfo = {...this.newsForm.value, prev_image: this.prevImage};
      this.store.dispatch(new UpdateNews(newNewsInfo));
    } else {
      this.store.dispatch(new CreateNews(this.newsForm.value));
    }
    this.router.navigateByUrl('/panel/news');
  }

  getSafeUrl(imageName) {
    return this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}/uploads/${imageName}`);
  }
}
