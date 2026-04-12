const amqp = require("amqplib");
const sendRegisterMail = require("./sendMail");
require("dotenv").config();

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost";
const EXCHANGE_NAME = "Register_exchange";

async function startConsumer() {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertExchange(EXCHANGE_NAME, "fanout", { durable: true });

    const q = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(q.queue, EXCHANGE_NAME, "");

    console.log("Mail-service wacht op registratieberichten...");

    channel.consume(q.queue, async (msg) => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        const email = data.email;

        console.log(`Bericht ontvangen voor e-mail: ${email}`);
        await sendRegisterMail(email);

        channel.ack(msg);
      }
    });
  } catch (err) {
    console.error("RabbitMQ niet bereikbaar, nieuwe poging over 5 seconden:", err.message);
    setTimeout(startConsumer, 5000);
  }
}

module.exports = startConsumer;
