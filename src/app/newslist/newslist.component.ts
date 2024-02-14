import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { news } from './news';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit{
  jsonString!: string;
  newsData!: any;
  newsArray : news[] = [];

  constructor(private newsService: NewsService) {
  }
  
  ngOnInit(): void {

    this.newsService.fetchNewsData()
    .then((result: any) => {
      this.jsonString = JSON.stringify(result);
      this.newsData = JSON.parse(this.jsonString);
      console.log(this.newsData.articles);
      this.newsData.articles.forEach((element: any) => {
        const n : news = { 
          author: element.author,
          content: element.content,
          description: element.description,
          title: element.title
        }; 

        console.log("News data: " + n);
        this.newsArray.push(n);

      });
    })
    .catch((error: any) => {
      console.log("Promise rejected error: " + JSON.stringify(error));
    });
  }

}
