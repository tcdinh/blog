import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component ({
    selector: 'app-nav-header',
    templateUrl: './navHeader.component.html',
})

export class NavHeaderComponent {
    constructor (
        public UserService: UserService,
        public router: Router,
    ) {}
}
