import { ChangeDetectionStrategy, Component, Inject, inject, InjectionToken, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { tokens } from "../app.module";
import { ShoppingService } from "../shoppping-service.service";

@Component({
    selector:"app-shopping",
    styleUrls:["./app-shopping-component.scss"],
    templateUrl:"./app-shopping-component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShoppingComponent implements OnInit{
    list:any=[];
    appCons:any="";
    constructor(@Inject(tokens.shopToken) private service:ShoppingService,@Inject(tokens.appconToken) private appCon:string, private route: ActivatedRoute){
        this.appCons = appCon;
    }

    ngOnInit(): void {
       this.fetchData();
       const params = this.route.queryParams;
       console.log("params:"+ JSON.stringify(params));

    }

    private fetchData(){
        this.list = this.service.fetchShoppingList();
    }

    trackBytems(index:number,item:any){
        return item.id;
    }

    
    
}