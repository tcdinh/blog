import { Injectable } from '@angular/core';
import { BlogPostComponent } from './blogPost.component';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogPostService {
    lastPost: string;

    constructor (private http: Http) {}

    getBlogPosts(single?) {
        const myParams = new URLSearchParams();
        if (single) {
            myParams.set('single', single);
        }
        if (this.lastPost) {
            myParams.set('lastIndex', this.lastPost);
        }
        return this.http.get('/api/blogPosts', {params: myParams})
            .map(response => response.json());
    }

    addBlogPost(titleOfPost, contentOfPost) {
        return this.http.post('/api/addPost', { 'title' : titleOfPost, 'content' : contentOfPost })
            .map(response => response.json());
    }

    getBlogPostCount() {
        return this.http.get('api/getBlogPostCount')
            .map(response => response.json());
    }

    updateBlogPost(idOfPost, titleOfPost, contentOfPost) {
        return this.http.put('/api/updatePost', { '_id' : idOfPost, 'title' : titleOfPost, 'content' : contentOfPost })
            .map(response => response.json());
    }

    removeBlogPost(idOfPost) {
        const param = new URLSearchParams();
        param.set('_id' , idOfPost);
        return this.http.delete('/api/deletePost', { params : param })
            .map(response => response.json());
    }

    getSkipPost(pageNumber) {
        const param = new URLSearchParams();
        param.set('pageNumber', pageNumber);
        return this.http.get('/api/skipPost', { params : param })
            .map(response => response.json());
    }

}
