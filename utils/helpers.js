const { format } = require('date-fns');

module.exports = {
  formatDate: (date, formatString = 'MMMM do, yyyy') => {
    return format(date, formatString);
  },
};
