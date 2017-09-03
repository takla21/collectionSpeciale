import { Component } from '@angular/core';

import * as data from '../data/data'

const DEFAULT = 0;

@Component({
  selector: 'principal-component',
  templateUrl: '../pages/html/principal.html',
  styleUrls: ['../pages/css/principal.css']
})
export class PrincipalComponent {
    video = data.videos[DEFAULT];

    constructor(){
        console.log(this.video);
    }
}
