import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  mensajes: any;

  ngOnInit(): void {
    this.mensajes = this.dataService.getPosts()
    /*.subscribe((posts: any[]) => {
      this.mensajes = posts;
    });*/
  }

}
