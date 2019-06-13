import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() noOfPosts: number;
  @Output() pageNumberClick = new EventEmitter<number>();
  pages: number[];
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.noOfPosts);
  }

  pageNumberClicked(pageNumber){

    this.pageNumberClick.emit(pageNumber);
  }

}
