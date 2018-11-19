const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var testString = 1;

        var res = isRealString(testString);
        expect(res).toBe(false);

    });

    it('should string with only spaces', () => {
        var testString = '   ';

        var res = isRealString(testString);
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var testString = ' And rew';

        var res = isRealString(testString);
        expect(res).toBe(true);
    });
});