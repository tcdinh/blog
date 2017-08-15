import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogPostService } from '../blogPost.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnInit, OnChanges {
    @Output() pages: Observable<number[]>;
    currentPage: number;
    totalPages: number;
    offset = 0;
    limit = 5;
    size;
    range = 5;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private BlogPostService: BlogPostService) { }

    ngOnInit() {
        this.size = this.BlogPostService.getBlogPostCount().subscribe(count => { this.size = count; });
        this.getPages(this.offset, this.limit, this.size);
    }

    ngOnChanges() {
        this.getPages(this.offset, this.limit, this.size);
    }

    getPages(offset: number, limit: number, size: number) {
        this.currentPage = this.getCurrentPage(offset, limit);
        this.totalPages = this.getTotalPages(limit, size);
    }

    getCurrentPage(offset: number, limit: number): number {
        return Math.floor(offset / limit) + 1;
    }

    getTotalPages(limit: number, size: number): number {
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    }

    isValidPageNumber(page: number, totalPages: number): boolean {
        return page > 0 && page <= totalPages;
    }

    selectPage(page: number) {
        this.pageChange.emit(page);
    }
}
