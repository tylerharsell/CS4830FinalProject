import { Component } from '@angular/core';

import { Post} from './app/post/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storedPost: Post[] = [];
  title = 'Web_Dev_2_Final';
  onPostAdded(post: Post){
    this.storedPost.push(post)
  }
}
