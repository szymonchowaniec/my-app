import {Component, OnChanges, OnInit, SimpleChanges, Input} from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  @Input() images;
  galleryBig;

  constructor() { }

  ngOnInit() {
    this.galleryBig = this.images[1];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.images.currentValue[1]);
    this.galleryBig = changes.images.currentValue[1];
  }

  galleryRefresh(img) {

  }

}
