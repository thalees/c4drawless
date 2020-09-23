'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const S3 = new AWS.S3()
const dynamoDbConnection = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, _context, callback) => {
  const userId = event.pathParameters.userId;
  const data = JSON.parse(event.body);

  // const { key } = record.s3.object;

  // const image = await S3.getObject({
  //   Bucket: process.env.SCREENSHOT_BUCKET_NAME,
  //   Key: key
  // }).promise();

  const params = {
    TableName: process.env.SCREENSHOT_TABLE,
    Item: {
      screenshotId: uuid.v4(),
      userId: userId,
      schemaId: data.schemaId,
      url: data.url,
    },
  };

  dynamoDbConnection.put(params, (error) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: "Couldn't create the schema item",
      });
      return;
    }

    const response = {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
