module.exports = {
  rabbitMQ: {
    url: process.env.RABBITMQ_URL || "amqp://localhost",
    exchangeName: "clock_exchange"
  }
};
