'use strict';

module.exports.handle = (_event, _context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      version: '1.0.1'
    }),
  };
  callback(null, response);
};
