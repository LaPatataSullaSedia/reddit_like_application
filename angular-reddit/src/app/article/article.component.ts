import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'card';
  votes: number;
  title: string;
  link: string;
  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }
  voteUp():Boolean {
    this.votes += 1;
    return false;
  }
  voteDown():Boolean{
      this.votes -= 1;
      return false; 
  }
  ngOnInit() {}

}
