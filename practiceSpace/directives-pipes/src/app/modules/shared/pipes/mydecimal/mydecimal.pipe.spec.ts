import { MydecimalPipe } from './mydecimal.pipe';

describe('MydecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new MydecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
