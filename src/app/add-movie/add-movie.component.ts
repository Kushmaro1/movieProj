import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {MovieListService} from '../movie-list.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  alert:boolean=false
  disableMessage:boolean = false;


  addMovie= new FormGroup({
    name : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required),
    movieLink : new FormControl('',Validators.required),
    pic : new FormControl('',Validators.required)

  });
 
  constructor(private movies:MovieListService, private rout:Router) { }
  collection:any=[];
  
  ngOnInit(): void {
    this.movies.getList().subscribe((res)=>{
      console.warn(res)
      this.collection=res
        
    });
      
    }
    toList(){
      this.rout.navigateByUrl('secured')
    }
    something(abc){
      if (abc.name==this.collection.name) {
          this.disableMessage=true
      }
        
    }

    dob(name){
      if (name=this.collection.name) {
        console.log("okok")
      }
    }
    
    
    collectData(){
      this.movies.saveMovie(this.addMovie.value)
      .subscribe((res)=>{this.addMovie.reset({})
      this.alert=true
      console.log(this.addMovie.getRawValue())
      
      
     
      
      })
    }
    closeAlert(){
      this.alert=false
    }
    
  }