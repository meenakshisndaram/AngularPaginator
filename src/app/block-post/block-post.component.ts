import { Component, Input, OnInit } from '@angular/core';
import { BlockPost } from '../block-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-block-post',
  templateUrl: './block-post.component.html',
  styleUrls: ['./block-post.component.scss']
})
export class BlockPostComponent implements OnInit{
  title:String='';
  Summary:String='';
  fullSummary:String='';
  @Input('Education')eduaction:String='';
  @Input("From")from:String='';
  @Input("post1")post:any;
  constructor(private truncate:TruncatePipe){}
  ngOnInit(): void {
    this.title="About meenakshi"
    this.Summary="I Fully dont know my potential yet!!! it is my biggest draw back"
    this.fullSummary=this.post.Summary;
    this.post.Summary = this.truncate.transform(this.post.Summary, 45);}
    

showfulltext(){
  this.post.Summary=this.fullSummary;
 
}
markfavo(){
  this.post.isFav=!this.post.isFav;
  
}
}
