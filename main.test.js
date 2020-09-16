const capitalTest = require('./main');

test('Normal Test Cases', () => {
    expect(capitalTest('heLLo', 'GUlp')).toBe("help");
    expect(capitalTest('HELLO', 'GUlp')).toBe("GUlp");
});