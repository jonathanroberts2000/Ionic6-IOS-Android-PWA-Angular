import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  categories: string[] = [ "business", "entertainment", "general", "health", "science", "sports", "technology" ];
  selectedCategory: string = this.categories[0];
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
      this.articles = [...this.articles, ...articles];
    });
  }

  segmentChanged(event: any): void {
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
      this.articles = [...articles];
    });
  }



}
