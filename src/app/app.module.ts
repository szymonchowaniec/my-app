import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageFrameComponent } from './components/image-frame/image-frame.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { SetColorDirective } from './directives/set-color.directive';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageFrameComponent,
    WorkerCardComponent,
    SetColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
