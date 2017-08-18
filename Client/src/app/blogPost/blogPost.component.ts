import { Component, Input } from '@angular/core';
import { BlogPostService } from './blogPost.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blogPost.component.html',
})

export class BlogPostComponent {
    private _id: number;
    public title: string;
    public content: string;
    blogPosts = [];

    constructor(
        private blogService: BlogPostService,
        private activeRoute: ActivatedRoute,
        public userService: UserService,
        private router: Router) {
            if (this.activeRoute.snapshot.params['_id']) {
                this._id = this.activeRoute.snapshot.params['_id'];
            }
            this.start();
        }

    start() {
        if (this._id) {
            this.blogService.getBlogPosts(this._id).subscribe(blogPosts => {
                this.blogPosts = blogPosts;
                this.title = blogPosts[0].title;
                this.content = blogPosts[0].content;
            });
        } else {
            this.blogService.getBlogPosts().subscribe(blogPosts => {
                this.blogPosts = blogPosts;
                this.blogService.lastPost = blogPosts[blogPosts.length - 1]._id;
            });
        }
    }

    deletePost() {
        this.blogService.removeBlogPost(this._id).subscribe(returnValue => {
            // this.router.navigate(['/home']);
        });
        this.router.navigate(['/home']);
    }

    updatePost() {
        localStorage.setItem('editID', this._id.toString());
        localStorage.setItem('editTitle', this.title.toString());
        localStorage.setItem('editContent', this.content.toString());
        this.router.navigate(['/updatePost']);
    }

    updateBlogPage(pageNumber) {
        // this.blogService.getBlogPosts(undefined, this.lastIndex).subscribe(blogPosts => { this.blogPosts = blogPosts; });
        this.blogService.getSkipPost(pageNumber).subscribe(blogPosts => { this.blogPosts = blogPosts; });
    }
}
