import sum from '../src/sum'

describe('sum', () => {
  describe(`run 1 times`, () => {
    for(let i = 0; i < 1; i++) {
      describe('repeat', () => {
        it('adds 1 + 2 to equal 3', () => {
          expect(sum(1, 2)).toBe(3);
        });
      });
    }
  });
});
