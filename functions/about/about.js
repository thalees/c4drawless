'use strict';

module.exports.handle = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        version: '1.0.0'
      }
    ),
  };
};
