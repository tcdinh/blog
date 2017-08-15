import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from '../blogPost.service';

@Component({
    selector: 'app-new-blog-post',
    templateUrl: './newBlogPost.component.html'
})

export class NewBlogPostComponent {
    title: string;
    content: string;

    constructor(private blogPostService: BlogPostService, private router: Router) {

    }

    addNewBlogPost() {
        this.blogPostService.addBlogPost(this.title, this.content).subscribe(something => {
            // this.router.navigate(['/home']);
        });
        this.router.navigate(['home']);
    }
}
