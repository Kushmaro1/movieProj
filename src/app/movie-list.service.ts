import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  url="http://localhost:3000/movies"
  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(this.url);
  }

  saveMovie(dat)
  {
    return this.http.post(this.url, dat)
  }
  deleteMovie(id)
    {
    return this.http.delete(`${this.url}/${id}`);
    }
    
}
