import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './blogPost/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './login/login.component';
import { BlogPostComponent } from './blogPost/blogPost.component';
import { NewBlogPostComponent } from './blogPost/new/newBlogPost.component';
import { UpdateBlogPostComponent } from './blogPost/update/updatePost.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: GalleryComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'blog/:_id',
        component: BlogPostComponent,
    },
    {
        path: 'addNewPost',
        component: NewBlogPostComponent
    },
    {
        path: 'updatePost',
        component: UpdateBlogPostComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
