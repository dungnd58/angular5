import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'standardize'})
export class StandardizePipe implements PipeTransform {
    transform(value: string): string {
        if(!value) return value;
        
        let result = '';
        result = value.toLowerCase();
        result = result.charAt(0).toUpperCase() + result.slice(1);
        return result;
    }
}

