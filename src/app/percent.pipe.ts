import { Pipe, PipeTransform } from '@angular/core';

/**
*
*/
@Pipe({ name: 'percent' })
export class PercentPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): number {
        return Math.round(100 * value);
    }
}
