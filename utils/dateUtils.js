/*
 - date formatter based on date and format Eg: dateFormatter(date,format)
*/

const moment = require('moment');

const dateFormatter = (date, format) => {
  const defaultFormat = format || 'LLL';
  return moment(date).format(defaultFormat);
};

module.exports = {
  dateFormatter,
};
