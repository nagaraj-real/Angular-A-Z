import { Component, ContentChild, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AppTitleComponent } from '../app-title/app-title.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @ViewChild('test') headerTextElem!:ElementRef;
  @ContentChild(AppTitleComponent) titleComponent! : Component;

  constructor(private zone:NgZone) { }

  ngOnInit(): void {

    this.zone.runOutsideAngular(()=>{
        setTimeout(() => {
            console.log("test")
        }, 100);
    })
  }

  ngAfterViewInit():void{
    //console.log(this.headerTextElem2.nativeElement);
  }

  ngAfterContentInit():void{
    console.log(this.titleComponent);
  }

}
