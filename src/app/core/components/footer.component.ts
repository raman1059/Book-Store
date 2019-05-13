import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <a href="https://angular.io/" class="demo-label">Made by Angular & NgRx</a>
    `,
    styles: [
        `
        a {
            text-decoration: none !important;
            text-align: center;
            white-space: nowrap;
            color: #757575 !important;
            padding-bottom: 20px;
        }

        .demo-label {
            box-sizing: border-box;
            width: 120px;
            padding: 6px;
            margin: 8px auto 0;
            background-color: black;
            color: white;
            text-transform: uppercase;
            font-size: 14px;
        }
    `
    ]
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
