const amqp = require('amqplib');
const config = require('../routes/config');

class Producer {
  connection;
  channel;

  async createChannel() {
    try {
      this.connection = await amqp.connect(config.rabbitMQ.url);
      this.connection.on('close', () => {
        this.channel = undefined;
        this.connection = undefined;
      });
      this.connection.on('error', (err) => {
        console.error('RabbitMQ connectiefout (upload):', err.message);
      });

      this.channel = await this.connection.createChannel();
      this.channel.on('close', () => {
        this.channel = undefined;
      });
      this.channel.on('error', (err) => {
        console.error('RabbitMQ channelfout (upload):', err.message);
      });
    } catch (err) {
      this.channel = undefined;
      this.connection = undefined;
      console.error('Kanaal aanmaken mislukt voor upload producer:', err.message);
      throw err;
    }
  }

  async publishMessage(upload) {
    try {
      if (!this.channel) {
        await this.createChannel();
      }

      if (typeof upload.then === 'function') {
        upload = await upload;
      }

      const exchangeName = config.rabbitMQ.exchangeName;
      await this.channel.assertExchange(exchangeName, 'fanout', { durable: true });

      const imgData = upload.img?.data
        ? upload.img.data.toString('base64')
        : null;

      const messagePayload = {
        uploadId: upload.uploadId,
        filename: upload.filename,
        userId: upload.userId,
        targetId: upload.targetId,
        contentType: upload.contentType,
        uploadDate: upload.uploadDate,
        img: imgData
          ? {
              data: imgData,
              contentType: upload.img.contentType
            }
          : null
      };

      this.channel.publish(
        exchangeName,
        '',
        Buffer.from(JSON.stringify(messagePayload)),
        { persistent: true }
      );

      console.log('upload: ', upload);
      console.log('message payload: ', messagePayload);
      console.log(`Bericht verzonden naar fanout exchange "${exchangeName}"`);
    } catch (err) {
      this.channel = undefined;
      console.error('Upload-event publish mislukt:', err.message);
      throw err;
    }
  }
}

module.exports = new Producer();
