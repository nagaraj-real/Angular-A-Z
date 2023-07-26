
import { InjectionToken, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppTitleComponent } from "./app-title/app-title.component";
import { MainRootComponent } from "./main-root/main-root.component";
import { FocusHighlightDirective } from './focus-highlight.directive';
import { AppShoppingComponent } from "./app-shoppping/app-shopping-component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CountPipe } from "./count.pipe";
import { ShoppingService } from "./shoppping-service.service";
import { RoutingModule } from "./routing,module";
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppingInterceptor } from "./shopping.intercepter";
import { LoggingInterceptor } from "./logging.intercepter";
import { PhoneNumberDirective } from "./validate.directive";

export const tokens={
  shopToken : new InjectionToken<ShoppingService>("Shop"),
  appconToken: new InjectionToken<String>("appcon"),
  factoryExample: new InjectionToken<any>("fact")
}
@NgModule({
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations:[
    MainRootComponent,
    AppHeaderComponent,
    AppTitleComponent,
    FocusHighlightDirective,
    AppShoppingComponent,
    CountPipe,
    ErrorpageComponent,
    ShoppingAddComponent,
    PhoneNumberDirective
  ],
  providers:[
    [HttpClient,
    {
    provide: tokens.shopToken, 
    useClass:ShoppingService
  },{
    provide: tokens.appconToken, 
    useValue: "test"
  },{
    provide: tokens.factoryExample, 
    useFactory: {test:"multitest"}
  }],
  {provide: HTTP_INTERCEPTORS, useClass: ShoppingInterceptor,multi:true},
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor,multi:true}

  ],
  bootstrap:[MainRootComponent]
})
export class AppModule{

}




