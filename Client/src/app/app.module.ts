import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { BlogPostService } from './blogPost/blogPost.service';
import { UserService } from './user/user.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login.component';
import { NavHeaderComponent } from './nav/navHeader.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './blogPost/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogPostComponent } from './blogPost/blogPost.component';
import { NewBlogPostComponent } from './blogPost/new/newBlogPost.component';
import { PaginationComponent } from './/blogPost/pagination/pagination.component';
import { UpdateBlogPostComponent } from './blogPost/update/updatePost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    LoginPageComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
    BlogPostComponent,
    NewBlogPostComponent,
    PaginationComponent,
    UpdateBlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [ BlogPostService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
