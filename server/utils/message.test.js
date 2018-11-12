var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Andrew';
        var text = 'Hi there';
        var res = generateMessage(from, text);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({from, text});

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Deb';
        var latitude = 15;
        var longitude = 19;
        var url = `https://www.google.com/maps?q=15,19`;
        var res = generateLocationMessage(from, latitude, longitude);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({from, url});
    });
});