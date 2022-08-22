import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CritizenIdComponent } from './critizen-id/critizen-id.component';
import { HerosComponent } from './heros/heros.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { TriangleComponent } from './triangle/triangle.component';

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
  {
    path: 'triangle',
    component: TriangleComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./triangle/triangle.module').then(
            (m) => m.TriangleModule,
          ),
      },

    ],
  },
  {
    path: 'critizen',
    component: CritizenIdComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./critizen-id/critizen-id.module').then(
            (m) => m.CritizenIdModule,
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
