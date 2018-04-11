import { Component, AfterViewInit, HostListener, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BlogPostsDirective } from './blog-post.directive';
import { BlogPostComponent } from './blogPost.component';
import { AddItem } from '../add-item';

@Component ({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
// logic goes here
    @ViewChild(BlogPostsDirective) blogPosts: BlogPostsDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngAfterViewInit() {
        this.loadComponent();

    }

    loadComponent() {
        const ItemToAdd = new AddItem(BlogPostComponent);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemToAdd.component);
        const viewContainerRef = this.blogPosts.viewContainerRef;
        // viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        // (<BlogPostComponent>componentRef.instance).data = adItem.data;
      }

    @HostListener('window:scroll', ['$event'])
    onScroll($event: Event): void {
        if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 1)) {
            // Write logic here for loading new content.
            // this.loadComponent();
            this.loadComponent();
        }
    }

}
