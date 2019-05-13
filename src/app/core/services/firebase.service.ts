import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';



@Injectable()
export class FirebaseService {
    constructor(private http: Http) { }
}
