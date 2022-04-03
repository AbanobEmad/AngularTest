import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../Serviscs/post-service.service';
import { UserService } from '../Serviscs/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  constructor(private postService:PostServiceService) { 
  }
  Posts:any;

  ngOnInit(): void {
    this.postService.GetAllPost().subscribe(
      data=>
      {
        this.Posts=data;
      }
    )
  }

}
