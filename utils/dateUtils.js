/*
 - date formatter based on date and format Eg: dateFormatter(date,format)
 - datechecker for 18 yrs above age
 - convert date to age
 - Current Epoch unix timestamp generator (should generate 1631635697 number)
*/

const moment = require('moment');

const dateFormatter = (date, format) => {
  return moment(date).format(format);
};

const calculateAge = (dob) => {
  return moment().diff(moment(dob, 'YYYY-MM-DD'), 'years');
};

const adultDateChecker = (dob, minimumAge) => {
  return calculateAge(dob) >= minimumAge;
};

const unixTimestamps = (date) => {
  return Math.floor(new Date(date).getTime() / 1000);
};

module.exports = {
  dateFormatter, calculateAge, unixTimestamps, adultDateChecker,
};
