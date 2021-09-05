import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'withWatermelons' })
export class WithWatermelonsPipe implements PipeTransform {
  transform(value: unknown, amount: number = 3): unknown {
    if (typeof value !== 'string') {
      return value;
    }

    const watermelons = '🍉'.repeat(amount);

    return `${watermelons} ${value} ${watermelons}`;
  }
}
