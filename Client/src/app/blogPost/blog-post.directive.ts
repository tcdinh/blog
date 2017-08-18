import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appBlogPostsDirective]',
})

export class BlogPostsDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
