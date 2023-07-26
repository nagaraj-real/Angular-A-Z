import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppShoppingComponent } from "./app-shoppping/app-shopping-component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { ShoppingAddComponent } from "./shopping-add/shopping-add.component";

class activateRouteGuards implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }

}
const roots: Routes = [
    {path:"shopping", component:AppShoppingComponent},
    {path:"add", component:ShoppingAddComponent},
    {path:"**", component: ErrorpageComponent}

]
@NgModule({
    imports:[RouterModule.forRoot(roots)],
    exports:[RouterModule]
})
export class RoutingModule
{

}

