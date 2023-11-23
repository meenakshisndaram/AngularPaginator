import { Injectable } from '@angular/core';
import { BlockPost } from './block-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {}

  getData():BlockPost[][]{
    return[[
      {
        Skills:'java',
        precentage:89,
        Summary:"Java is a high-level object-oriented programming language initially developed by Sun Microsystems in 1995. It was designed with the principle of Write Once, Run Anywhere (WORA), meaning that Java code can run on any device that supports Java without modification"
      },
      {
        Skills:'CSS',
        precentage:89,
        Summary:"CSS, or Cascading Style Sheets, is a crucial technology in web development that enhances the presentation and layout of HTML documents. With CSS, developers can define the visual aspects of a webpage, such as colors, fonts, spacing, and responsive design. By separating content from presentation, CSS promotes cleaner and more maintainable code. It operates on a cascading principle, where styles can be inherited or overridden, allowing for a consistent look across a website while accommodating specific styling needs for individual elements."
}
    ],
    [
      {
        Skills:'Html',
        precentage:89,
        Summary:"HTML, which stands for HyperText Markup Language, is the foundational language for creating and structuring content on the World Wide Web. Developed by Sir Tim Berners-Lee in 1991, HTML serves as the backbone of web pages, defining the structure and layout of information. It employs a markup system using tags that encapsulate different elements, such as headings, paragraphs, images, links, and more. HTML documents are comprised of a hierarchical structure, with the root element being <html>, containing two main sections: <head> for metadata and <body> for the actual content visible to users. Tags are paired, and each opening tag is complemented by a closing tag, facilitating the nesting of elements. As a markup language, HTML provides a standardized way to present content across various web browsers, ensuring a consistent and accessible user experience. Over time, HTML has undergone several versions, with HTML5 being the latest major revision."
      },

      {
        Skills:'CSS',
        precentage:89,
        Summary:"CSS, or Cascading Style Sheets, is a crucial technology in web development that enhances the presentation and layout of HTML documents. With CSS, developers can define the visual aspects of a webpage, such as colors, fonts, spacing, and responsive design. By separating content from presentation, CSS promotes cleaner and more maintainable code. It operates on a cascading principle, where styles can be inherited or overridden, allowing for a consistent look across a website while accommodating specific styling needs for individual elements."
}

    ],
    [
      {
        
        Skills:'CSS',
        precentage:89,
        Summary:"CSS, or Cascading Style Sheets, is a crucial technology in web development that enhances the presentation and layout of HTML documents. With CSS, developers can define the visual aspects of a webpage, such as colors, fonts, spacing, and responsive design. By separating content from presentation, CSS promotes cleaner and more maintainable code. It operates on a cascading principle, where styles can be inherited or overridden, allowing for a consistent look across a website while accommodating specific styling needs for individual elements."
      },
      {
      Skills:'java',
        precentage:89,
        Summary:"Java is a high-level object-oriented programming language initially developed by Sun Microsystems in 1995. It was designed with the principle of Write Once, Run Anywhere (WORA), meaning that Java code can run on any device that supports Java without modification"
      }
    ]

    
  ]
  }
}

