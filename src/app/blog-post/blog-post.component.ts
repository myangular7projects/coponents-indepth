import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

 @Input("post") userPost:Post;
  userPostFullSummary: String;
 constructor(private truncate:TruncatePipe){

 }
  ngOnInit() {
    this.userPostFullSummary = this.userPost.summary;
    this.userPost.summary = this.truncate.transform(this.userPost.summary,30);
  }

  showFullText(){
    this.userPost.summary = this.userPostFullSummary;
  }

}
