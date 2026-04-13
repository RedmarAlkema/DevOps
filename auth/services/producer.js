const amqp = require('amqplib');
require('dotenv').config();

class Producer {
  connection;
  channel;

  async createChannel() {
    try {
      this.connection = await amqp.connect(process.env.RABBITMQ_URL);
      this.connection.on('close', () => {
        this.channel = undefined;
        this.connection = undefined;
      });
      this.connection.on('error', (err) => {
        console.error('RabbitMQ connectiefout (auth):', err.message);
      });

      this.channel = await this.connection.createChannel();
      this.channel.on('close', () => {
        this.channel = undefined;
      });
      this.channel.on('error', (err) => {
        console.error('RabbitMQ channelfout (auth):', err.message);
      });
    } catch (err) {
      this.channel = undefined;
      this.connection = undefined;
      console.error('Kanaal aanmaken mislukt voor auth producer:', err.message);
      throw err;
    }
  }

  async publishUserEmail(user) {
    try {
      if (!this.channel) {
        await this.createChannel();
      }

      const exchangeName = 'Register_exchange';
      await this.channel.assertExchange(exchangeName, 'fanout', { durable: true });

      const messagePayload = {
        email: user.email,
        userId: user._id,
        createdAt: user.createdAt,
      };

      this.channel.publish(
        exchangeName,
        '',
        Buffer.from(JSON.stringify(messagePayload)),
        { persistent: true }
      );
    } catch (err) {
      this.channel = undefined;
      console.error('Register-event publish mislukt:', err.message);
      throw err;
    }
  }
}

module.exports = new Producer();
