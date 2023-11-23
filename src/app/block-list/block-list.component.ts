import { Component,OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlockPost } from '../block-post';
import { BlockPostComponent } from '../block-post/block-post.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit{

  blockpost!:BlockPost[][];
  CurrentPage!:number;
  @ViewChildren('post11')blogpostcomponenets!:QueryList<BlockPostComponent>;
  constructor(private blogdataService:BlogDataService){}
  ngOnInit(): void {
    this.blockpost=this.blogdataService.getData();
    this.CurrentPage=0;
    //this.blockpost.push(new BlockPost("java", 98 ,"Java is a high-level object-oriented programming language initially developed by Sun Microsystems in 1995. It was designed with the principle of Write Once, Run Anywhere (WORA), meaning that Java code can run on any device that supports Java without modification"));
    //this.blockpost.push(new BlockPost("Html", 70, "HTML, which stands for HyperText Markup Language, is the foundational language for creating and structuring content on the World Wide Web. Developed by Sir Tim Berners-Lee in 1991, HTML serves as the backbone of web pages, defining the structure and layout of information. It employs a markup system using tags that encapsulate different elements, such as headings, paragraphs, images, links, and more. HTML documents are comprised of a hierarchical structure, with the root element being <html>, containing two main sections: <head> for metadata and <body> for the actual content visible to users. Tags are paired, and each opening tag is complemented by a closing tag, facilitating the nesting of elements. As a markup language, HTML provides a standardized way to present content across various web browsers, ensuring a consistent and accessible user experience. Over time, HTML has undergone several versions, with HTML5 being the latest major revision."));
    //this.blockpost.push(new BlockPost("CSS", 77,"CSS, or Cascading Style Sheets, is a crucial technology in web development that enhances the presentation and layout of HTML documents. With CSS, developers can define the visual aspects of a webpage, such as colors, fonts, spacing, and responsive design. By separating content from presentation, CSS promotes cleaner and more maintainable code. It operates on a cascading principle, where styles can be inherited or overridden, allowing for a consistent look across a website while accommodating specific styling needs for individual elements."));
    //this.blockpost.push(new BlockPost("Automation", 108,"Automation, a transformative force in various industries, involves the use of technology to perform tasks without human intervention. From manufacturing and logistics to information technology and beyond, automation streamlines processes, increases efficiency, and reduces human error. In the digital era, automation is prominently employed in software development, where continuous integration and deployment pipelines automate testing, building, and deployment of applications. Robotic Process Automation (RPA) is revolutionizing business processes by mimicking repetitive human tasks, freeing up human resources for more complex and strategic endeavors. As technologies like artificial intelligence and machine learning advance, automation is poised to play an even more pivotal role in shaping the future of work, driving innovation, and enhancing productivity across diverse sectors"),);
    

  }
  updatePage(newPage:number){
    console.log("Event emitted and method executed")
    this.CurrentPage=newPage;
  }
  expandall(){
    this.blogpostcomponenets.forEach(e=>e.showfulltext());

  }
  Favourite(){
    this.blockpost[this.CurrentPage].forEach(post=>post.isFav=true)

  }

}
