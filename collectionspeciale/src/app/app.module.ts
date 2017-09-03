import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { PrincipalComponent } from './components/principal.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { VideoComponent } from './components/video.component';
import { TextComponent } from './components/text.component'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
