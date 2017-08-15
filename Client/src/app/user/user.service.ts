import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {
    loggedIn = false;
    username: string;

    constructor (private http: Http) {}

    validateUser(username, password) {
        return this.http.post('/api/validateUser', { 'username' : username, 'password' : password })
            .map(response => response.json());
    }
    logout() {
        this.loggedIn = false;
    }
}
