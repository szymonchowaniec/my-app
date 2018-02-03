import { Component } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';
  byColor = 'blue';
  currentPhone = '000000000';
  galleryBig ;
  myName = 'Szymon';
  today: number = Date.now();
  items: any [] = [0, 1, 2];
  access = false;
  access2 = true;
  contacts: any [];
  images: string[];

  constructor(private dataService: DataService) {
    this.contacts = dataService.contacts;
    this.images = dataService.images;
    this.dataService.getWorkerFromServer().subscribe((resp) => {
    console.log(resp);
   this.contacts = resp.data; });

  }

  callToPhone(e) {
    console.log(e);
    this.currentPhone = e;
  }

  galleryRefresh(e) {
    console.log(e);
    this.galleryBig = e;
  }
}
