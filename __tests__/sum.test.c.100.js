import sum from '../src/sum'

const repeat = 100;

describe('sum', () => {
  describe(`run ${repeat} times`, () => {
    for(let i = 0; i < repeat; i++) {
      describe('repeat', () => {
        it('adds 1 + 2 to equal 3', () => {
          expect(sum(1, 2)).toBe(3);
        });
      });
    }
  });
});
