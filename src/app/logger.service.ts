import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  readonly prefix = '[APP]';

  log(...args: any[]): void {
    console.log(this.prefix, ...args);
  }

  error(...args: any[]): void {
    console.error(this.prefix, ...args);
  }

  warn(...args: any[]): void {
    console.warn(this.prefix, ...args);
  }
}
