import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogPostService } from '../blogPost.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnInit {
    constructor(private BlogPostService: BlogPostService) { }

    @HostListener('window:scroll', ['$event'])
    onScroll($event: Event): void {
        if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 1)) {
            // Write logic here for loading new content.
        }
    }

    ngOnInit() {
    }
}
