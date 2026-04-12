const amqp = require("amqplib");
const { getWinner } = require("../controllers/scoreController");

class GetDeadline {
  channel;

  async createChannel() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL || "amqp://localhost");
    this.channel = await connection.createChannel();
  }

  async consumeMessage() {
    const exchangeName = "clock_exchange";
    const queueName = "clock_queue";

    await this.channel.assertExchange(exchangeName, "fanout", { durable: true });
    await this.channel.assertQueue(queueName, { durable: true });
    await this.channel.bindQueue(queueName, exchangeName, "");

    console.log("Score-service wacht op deadline-events...");

    this.channel.consume(queueName, async (msg) => {
      if (msg !== null) {
        const content = msg.content.toString();
        const clockData = JSON.parse(content);
        const targetId = clockData.targetId;

        try {
          const simulatedReq = { params: { targetId } };
          const winner = await this.getWinner(simulatedReq);
          console.log(`Winner voor target ${targetId}:`, winner);

          this.channel.ack(msg);
        } catch (err) {
          console.error(`Fout bij verwerken van deadline-event voor ${targetId}:`, err.message);
        }
      }
    });
  }

  async getWinner(req) {
    try {
      const targetId = req.params.targetId;
      return await getWinner(targetId);
    } catch (err) {
      throw new Error(`Failed to fetch winner for targetId ${req.params.targetId}: ${err.message}`);
    }
  }

  async start() {
    try {
      await this.createChannel();
      await this.consumeMessage();
    } catch (err) {
      console.error("RabbitMQ deadline-consumer niet bereikbaar, nieuwe poging over 5 seconden:", err.message);
      setTimeout(() => this.start(), 5000);
    }
  }
}

module.exports = new GetDeadline();
