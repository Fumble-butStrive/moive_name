import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'dlete/:id', component: MoviesComponent},
];

@NgModule({
  // declarations: [],
  imports: [
    // NgModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
