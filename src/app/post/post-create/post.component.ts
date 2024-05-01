import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostCreateComponent {
  enteredContent = '';

  constructor(private postService: PostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.content);
    form.resetForm();
  }
}
