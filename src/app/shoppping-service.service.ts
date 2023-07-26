import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, shareReplay, Subject } from "rxjs";

@Injectable()
export class ShoppingService {

  private readonly apiPath = "https://62cb37bf3e924a012864e888.mockapi.io/api/details";
  constructor(private http:HttpClient){
  }

  

  fetchShoppingList(): Observable<any>{
    const getValues = map((item:any)=> item.data.filter((item:any)=> item.id>10));
    const catchErrors = catchError(()=>of([]));
    return this.http.get<any>(this.apiPath).pipe(getValues,catchErrors,shareReplay());
  }
}
