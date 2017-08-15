import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-login-page',
    templateUrl: './login.component.html',
})
export class LoginPageComponent {
    username: string;
    password: string;

    constructor( private userService: UserService, private router: Router ) {
    }

    validateUser() {
        this.userService.validateUser(this.username, this.password).subscribe(validated => {
            if (validated) {
                this.userService.loggedIn = true;
                this.userService.username = this.username;
                this.router.navigate(['/home']);
            }
        });
    }
}
