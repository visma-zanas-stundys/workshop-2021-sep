import { WithWatermelonsPipe } from './with-watermelons.pipe';

describe('WithWatermelonsPipe', () => {
  it('create an instance', () => {
    const pipe = new WithWatermelonsPipe();
    expect(pipe).toBeTruthy();
  });
});
