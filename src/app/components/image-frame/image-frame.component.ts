import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-image-frame',
  templateUrl: './image-frame.component.html',
  styleUrls: ['./image-frame.component.css']
})
export class ImageFrameComponent implements OnInit {

  @Input () images;
  @Output () imgEvent = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }

  doFrame( ) {
    this.imgEvent.emit(this.images);
  }

}
