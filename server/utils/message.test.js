var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Andrew';
        var text = 'Hi there';
        var res = generateMessage(from, text);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({from, text});

    });
});