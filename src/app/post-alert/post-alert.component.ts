import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-post-alert',
  templateUrl: './post-alert.component.html',
  styleUrls: ['./post-alert.component.css']
})
export class PostAlertComponent implements OnInit {

  // @Input("available") post: any;
  @Output() comment = new EventEmitter();

  message: string = "positive"
  constructor() { }

  ngOnInit(): void {
  }

  showComment() {
    this.comment.emit(this.message)
  }

}
