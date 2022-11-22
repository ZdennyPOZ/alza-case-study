import { ElementRef } from '@angular/core';
import { LongNameDirective } from './long-name.directive';

describe('LongNameDirective', () => {
  it('should create an instance', () => {
    const elem : ElementRef = new ElementRef(null);
    const directive = new LongNameDirective(elem);
    expect(directive).toBeTruthy();
  });
});
