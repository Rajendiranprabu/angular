import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirdemo',
  templateUrl: './dirdemo.component.html',
  styleUrls: ['./dirdemo.component.css']
})
export class DirdemoComponent implements OnInit {

  constructor(

  ) {
    this.birthDate = new Date();
  }

  fontColor: boolean = false;

  birthDate!: Date;

  message: any;

  ngOnInit(): void {
  }

  changeText() {
    this.fontColor = !this.fontColor;
    this.message = "Welcome to Angular"
  }

}
