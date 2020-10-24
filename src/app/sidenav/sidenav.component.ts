import { Component, OnInit, Input } from '@angular/core';
import {MovieListService} from '../movie-list.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  @Input() mov: string;
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
}
