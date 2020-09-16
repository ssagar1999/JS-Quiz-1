const hello = require('./main');

test('outputs the correct string', () => {
    expect(hello()).toBe("Hello world!");
});