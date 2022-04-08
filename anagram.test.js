
const isAnagram = require('./anagram');


test('check word hello', () => {
    expect(isAnagram('Hello', 'olleh')).toBeTruthy();
});

test('check error meg', () => {
    expect(isAnagram('Alloha', 'Lyoha')).toBeFalsy();
})

