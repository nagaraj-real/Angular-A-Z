import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: "CountPipe"})
export class CountPipe implements PipeTransform{
    transform(value: any, addNumber:number=0 ) {
        return value.length + addNumber;
    }

}