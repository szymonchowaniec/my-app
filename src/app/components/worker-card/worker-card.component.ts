import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input () data: {name, phone};
  @Output () callEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callTo() {
    this.callEvent.emit(this.data.phone);
  }
}
