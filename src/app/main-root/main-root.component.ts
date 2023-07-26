import { Component, ContentChild, Directive, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { reduce } from 'rxjs';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { ShoppingService } from '../shoppping-service.service';

@Component({
  selector: 'app-main-root',
  templateUrl: './main-root.component.html',
  styleUrls: ['./main-root.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainRootComponent implements OnInit {

  showTitle:boolean = true;
  headerText: string;
  color:string = "red";
  appFocusHighlight!: Directive;
  showContent: boolean = true;

  constructor() {
      this.headerText= "Test";
   }


  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {

  }

  clicked(event:Event){
    console.log("here" + event.target);
  }

}
