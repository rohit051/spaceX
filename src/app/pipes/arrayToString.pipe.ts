import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrtoStr' })
export class ArrayToStr implements PipeTransform {
    transform(data): String {
        return data.toString()? data.toString(): "N/A"
    }
} 