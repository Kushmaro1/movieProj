import { Component, OnInit } from '@angular/core';
import {MovieListService} from '../movie-list.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movies:MovieListService) { }
  collection: any=[];
  ngOnInit(): void {
    this.movies.getList().subscribe((res)=>{
      console.warn(res)
      this.collection=res
    })
    }
    deleteMovie(item){
        this.collection.splice(item -1,1)
        this.movies.deleteMovie(item).subscribe((res)=>{
          console.warn("res", res)
        })
    }

    
  }


