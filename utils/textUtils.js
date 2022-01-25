/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/*
 - Propercase converter
 - Fullname splitter
 - Sentence santizer
 - Escape character remover
 - Slug Generator
 */

const properCase = name => {
  return name
    .split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ');
};

const fullNameSplitter = fullName => {
  const splittedName = fullName.split(' ');
  return {
    first: splittedName.shift(),
    last: splittedName.pop(),
    middle: splittedName.join(' '),
  };
};

const sentenceSantizer = sentence => {
  return sentence
    .replace(/[\/\\#+()$~%:*<>{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const escapeCharacterRemover = text => {
  return text.replace(/[^a-zA-Z0-9]/g, '');
};

const slugGenerator = name => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
};

module.exports = {
  properCase,
  fullNameSplitter,
  sentenceSantizer,
  escapeCharacterRemover,
  slugGenerator,
};
