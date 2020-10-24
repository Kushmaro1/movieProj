import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {SecuredComponent} from './secured/secured.component'
import {AddMovieComponent} from './add-movie/add-movie.component'
import { MovieListComponent } from './movie-list/movie-list.component';
const routes: Routes = [{
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'secured',
      component: SecuredComponent
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'addmovie',
      component: AddMovieComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
