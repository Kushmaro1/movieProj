import { Component, OnInit, Input } from '@angular/core';
import {MovieListService} from '../movie-list.service'
@Component({
  selector: 'app-secured',
  templateUrl: './secured.component.html',
  styleUrls: ['./secured.component.css']
})
export class SecuredComponent implements OnInit {
  @Input() mov: any;
  double:boolean=true
  constructor(private movies:MovieListService) { }
  collection: any=[];
  collectdouble: any=[];

  ngOnInit(): void {
    this.movies.getList().subscribe((res)=>{
      console.warn(res)
      this.collection=res
      this.collectdouble=res
  })

}
Dramaclick(cat){
  console.warn(cat)

 
}

}
