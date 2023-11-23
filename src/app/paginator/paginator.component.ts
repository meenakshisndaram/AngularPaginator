import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input()numberOfPages!:number;
  @Output()pageNumberclicked= new EventEmitter<number>();
  pages!:number[];
  ngOnInit(): void {
    this.pages=new Array(this.numberOfPages)
  }
  pageNumberclicked1(pageNumber:number){
    this.pageNumberclicked.emit(pageNumber)

  }

}
