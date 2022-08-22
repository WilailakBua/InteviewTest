import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HerosModule } from './heros/heros.module';
import { PostsModule } from './posts/posts.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TriangleModule } from './triangle/triangle.module';
import { CritizenIdComponent } from './critizen-id/critizen-id.component';
import { CritizenIdModule } from './critizen-id/critizen-id.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HerosModule,
    PostsModule,
    BrowserAnimationsModule,
    TriangleModule,
    CritizenIdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
