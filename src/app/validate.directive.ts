import { Directive, ElementRef } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from "@angular/forms";

@Directive({
    selector:"[appPhoneNumber]",
    providers:[
        {provide: NG_VALIDATORS, useExisting:PhoneNumberDirective,multi:true}
    ]
})
export class PhoneNumberDirective implements Validator{
    constructor(private elem: ElementRef){

    }
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return Validators.pattern("[- +()0-9]+")(control);
    }
}