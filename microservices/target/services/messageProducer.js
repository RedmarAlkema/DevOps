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
        console.error('RabbitMQ connectiefout (target):', err.message);
      });

      this.channel = await this.connection.createChannel();
      this.channel.on('close', () => {
        this.channel = undefined;
      });
      this.channel.on('error', (err) => {
        console.error('RabbitMQ channelfout (target):', err.message);
      });
    } catch (err) {
      this.channel = undefined;
      this.connection = undefined;
      console.error('Kanaal aanmaken mislukt voor target producer:', err.message);
      throw err;
    }
  }

  async publishMessage(target) {
    try {
      if (!this.channel) {
        await this.createChannel();
      }

      if (typeof target.then === 'function') {
        target = await target;
      }

      const exchangeName = config.rabbitMQ.exchangeName;
      await this.channel.assertExchange(exchangeName, 'fanout', { durable: true });

      const imgData = target.img?.data
        ? target.img.data.toString('base64')
        : null;

      const messagePayload = {
        targetId: target.targetId,
        title: target.title,
        location: target.location,
        description: target.description,
        radius: target.radius,
        deadline: target.deadline,
        ownerId: target.ownerId,
        img: imgData
          ? {
              data: imgData,
              contentType: target.img.contentType
            }
          : null
      };

      this.channel.publish(
        exchangeName,
        '',
        Buffer.from(JSON.stringify(messagePayload)),
        { persistent: true }
      );

      console.log(`Bericht verzonden naar fanout exchange "${exchangeName}"`);
    } catch (err) {
      this.channel = undefined;
      console.error('Target-event publish mislukt:', err.message);
      throw err;
    }
  }
}

module.exports = new Producer();
