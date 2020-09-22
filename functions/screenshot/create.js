'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDbConnection = new AWS.DynamoDB.DocumentClient();

module.exports.handle = async ({ Records: records }, context) => {
  await Promise.all(
    records.map(async record => {
      const { key } = record.s3.object;

      const image = await S3.getObject({
        Bucket: process.env.bucket,
        Key: key
      }).promise();

      const optimized = await sharp(image.Body)
        .resize(1280, 720, { fit: "inside", withoutEnlargement: true })
        .toFormat("jpeg", { progressive: true, quality: 50 })
        .toBuffer();

      await S3.putObject({
        Body: optimized,
        Bucket: process.env.bucket,
        ContentType: "image/jpeg",
        Key: `compressed/${basename(key, extname(key))}.jpg`
      }).promise();
    })
  );

    return {
      statusCode: 301,
      body: { ok: true }
    };









// --

  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  const userId = event.pathParameters.userId;

  const params = {
    TableName: process.env.SCREENSHOT_TABLE,
    Item: {
      screenshotId: uuid.v4(),
      userId: userId,
      url: data.url,
      createdAt: timestamp,
      updatedAt: timestamp,
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


// - [ ] POST /users/{user_id}/screenshots
//   - DynamoDB
//   - S3
//   - Salvar a imagem enviada no S3
//   - Buildar o Json que será salvo no DynamoDB


