import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ViewEncapsulation } from "@angular/core";
import { AppHeaderComponent } from "../app-header/app-header.component";

@Component({
    selector:'app-title',
    templateUrl:'./app-title.component.html',
    styleUrls: ['./app-title.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class AppTitleComponent implements OnChanges {
    @ViewChild("collect1") collect1! : ElementRef;
    @Input() title: string = '';
    @Output() emitButtonClicked: EventEmitter<any> = new EventEmitter();
    username: string = "default";

    ngOnChanges(changes:SimpleChanges){
        for(let change in changes){
            console.log(change+ " :" + changes[change].currentValue);
        }
    }

    ngAfterViewInit(){
        console.log(`after view init - app -title: ${this.collect1.nativeElement}`);
    }

    onClick(event:any){
        this.emitButtonClicked.emit(event);
        console.log(this.username);
    }



}