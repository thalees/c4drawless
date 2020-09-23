'use strict';

const AWS = require('aws-sdk');

const dynamoDbConnection = new AWS.DynamoDB.DocumentClient();

module.exports.handle = (event, _context, callback) => {
  const userId = event.pathParameters.userId;

  const params = {
    TableName: process.env.SCHEMA_TABLE,
    FilterExpression: "#userId = :userId",
    ExpressionAttributeNames: {
        "#userId": "userId",
    },
    ExpressionAttributeValues: { ":userId": userId }
  }

  dynamoDbConnection.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: "Couldn't find the schema item",
      });
      return;
    }

    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
