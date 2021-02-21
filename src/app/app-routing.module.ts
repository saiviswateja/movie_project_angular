import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

const routes: Routes = [
  {path:'',component:MoviesPageComponent},
  {path:'movie',component:MovieDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovieDetailPageComponent,MoviesPageComponent];
