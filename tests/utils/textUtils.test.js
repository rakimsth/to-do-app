/* eslint-disable no-undef */
const {
  properCase,
  fullNameSplitter,
  sentenceSantizer,
  escapeCharacterRemover,
  slugGenerator,
} = require('../../utils/textUtils');

describe('Text Utils Helpers : Proper Case Function', () => {
  // Success Cases
  it('should return string', () => {
    const name = properCase('raktim shrestha');
    expect(typeof name).toBe('string');
  });
  it('should return proper name', () => {
    const name = properCase('raktim shrestha');
    expect(name).toMatch('Raktim Shrestha');
  });
  // Failure Cases
  it('should return proper name', () => {
    const name = properCase('raktim shrestha');
    expect(name).not.toMatch('Raktim shrestha');
  });
});

describe('Text Utils Helpers : fullNameSplitter Case Function', () => {
  // Success Cases
  it('should return object', () => {
    const name = fullNameSplitter('raktim shrestha');
    expect(typeof name).toBe('object');
  });
  it('should return object containing first, last and middle name', () => {
    const name = fullNameSplitter('raktim shrestha');
    expect(name).toMatchObject({
      first: 'raktim',
      last: 'shrestha',
      middle: '',
    });
  });
  // Failure Cases
  it('should not return object containing misplaced first, last and middle name', () => {
    const name = fullNameSplitter('raktim shrestha');
    expect(name).not.toMatchObject({
      first: 'raktim',
      last: '',
      middle: 'shrestha',
    });
  });
});

describe('Text Utils Helpers : Sentence Sanitizer Function', () => {
  // Success Cases
  it('should return string', () => {
    const name = sentenceSantizer('raktim shrestha');
    expect(typeof name).toBe('string');
  });
  it('should remove special character', () => {
    const name = sentenceSantizer('raktim shrestha is %');
    expect(name).toMatch('raktim shrestha is');
  });
  // Failure Cases
  it('should not allow special character', () => {
    const name = sentenceSantizer('raktim shrestha is %');
    expect(name).not.toMatch('raktim shrestha is %');
  });
});

describe('Text Utils Helpers : Escape Character Function', () => {
  // Success Cases
  it('should return string', () => {
    const name = escapeCharacterRemover('raktim shrestha');
    expect(typeof name).toBe('string');
  });
  it('should remove special character', () => {
    const name = escapeCharacterRemover('raktim shrestha is %');
    expect(name).toMatch('raktimshresthais');
  });
  // Failure Cases
  it('should not allow special character', () => {
    const name = escapeCharacterRemover('raktim shrestha is %');
    expect(name).not.toMatch('raktim shrestha is %');
  });
});

describe('Text Utils Helpers : Slug Generator Function', () => {
  // Success Cases
  it('should return string', () => {
    const name = slugGenerator('raktim shrestha');
    expect(typeof name).toBe('string');
  });
  it('should replace escape character with -', () => {
    const name = slugGenerator('raktim shrestha');
    expect(name).toMatch('raktim-shrestha');
  });
  // Failure Cases
  it('should not allow upper case character', () => {
    const name = slugGenerator('raktim shrestha');
    expect(name).not.toMatch('raktim-Shrestha');
  });
});
