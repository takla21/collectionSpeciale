import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-component',
  templateUrl: '../pages/html/text.html',
  styleUrls: ['../pages/css/text.css']
})
export class TextComponent {
    @Input() synopsis : string;
    @Input() credits : {
        realisateur : string,
        producteur : string,
        acteur : string[]
    };
    isSynopsis = true;
}
