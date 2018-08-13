const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  const string = 'Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain - text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters. If no separator is specified, an array containing the input string is returned.'

  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns same string if no line break is nessacery', () => {
    expect(wrap('Lorem ipsum dolor', 100)).to.equal('Lorem ipsum dolor');
  });

  it('Splits strings into lines of no more than MaxLen', () => {
    const len = parseInt(Math.random() * 30 + 10, 10);
    expect(
      wrap(string, len)
        .split('\n')
        .every(str => str.length <= len)
    ).to.equal(true);
  });

  it('it only splits out word bounderies', () =>{
    const len = parseInt(Math.random() * 30 + 10, 10);
    const wrapText = wrap(string,len)

    expect(
    string.split(' ').every(str => wrapText.includes(str))
  ).to.equal(true);
})



});
