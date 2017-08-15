import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blogPost.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blogPost.component.html',
})

export class BlogPostComponent implements OnInit {
    private _id: number;
    public title: string;
    public content: string;
    public lastIndex: string;

    constructor(
        private blogService: BlogPostService,
        private activeRoute: ActivatedRoute,
        public userService: UserService,
        private router: Router) {
        this._id = this.activeRoute.snapshot.params['_id'];
    }
    blogPosts = [];
    ngOnInit() {
        if (this._id) {
            this.blogService.getBlogPosts(this._id).subscribe(blogPosts => {
                this.blogPosts = blogPosts;
                this.title = blogPosts[0].title;
                this.content = blogPosts[0].content;
            });
        } else {
            this.blogService.getBlogPosts().subscribe(blogPosts => {
                this.blogPosts = blogPosts;
                this.lastIndex = blogPosts[4]._id;
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
