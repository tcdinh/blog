import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from '../blogPost.service';

@Component({
    selector: 'app-update-blog-post',
    templateUrl: './updatePost.component.html'
})

export class UpdateBlogPostComponent {
    id: string;
    title: string;
    content: string;
    updateData;

    constructor(private blogPostService: BlogPostService, private router: Router) {
        this.id = localStorage.getItem('editID');
        this.title = localStorage.getItem('editTitle');
        this.content = localStorage.getItem('editContent');
    }

    updateBlogPost() {
        this.blogPostService.updateBlogPost(this.id, this.title, this.content).subscribe(data => { this.updateData = data; });
        this.router.navigate(['/blog', this.id]);
    }
}
