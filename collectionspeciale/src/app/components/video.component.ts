import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'video-component',
  templateUrl: '../pages/html/video.html'/*,
  styleUrls: ['../pages/css/video.css']*/
})
export class VideoComponent implements OnChanges{
    @Input() url : string;
    safeURL;

    constructor(private sanitizer: DomSanitizer) {}

    getURL(){
        return this.sanitizer.bypassSecurityTrustUrl(this.url);
    }

    ngOnChanges(){
        this.safeURL = this.sanitizer.bypassSecurityTrustUrl(this.url)
    }
}
