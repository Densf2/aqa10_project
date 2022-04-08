

const returnStr = require('./checkstr');




describe('positive', () => {
    test('check that function return correct word', () => {
        expect(returnStr('grape')).toBe('grape');
    });

    test('check that function return correct result', () => {
        expect(returnStr('la-la-la')).toHaveLength(8);
    });
})