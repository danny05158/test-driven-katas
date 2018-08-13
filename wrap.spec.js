const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns same string if no line break is nessacery', () =>{
    expect(wrap("Lorem ipsum dolor", 100)).to.equal("Lorem ipsum dolor");
  })




});
