import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: []
  },

  {
    path: 'heros',
    component: HerosComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./heros/heros.module').then(
            (m) => m.HerosModule,
          ),
      },

    ],
  },

  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./posts/posts.module').then(
            (m) => m.PostsModule,
          ),
      },

    ],
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
