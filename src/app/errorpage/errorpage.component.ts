import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  template: "<h1>Invalid page</h1>",
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
