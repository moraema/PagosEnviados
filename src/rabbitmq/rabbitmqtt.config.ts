import amqp from "amqplib";

const config = {
  protocol: "amqp",
  hostname: "3.229.81.220",
  port: 5672,
  username: "guest",
  password: "guest",
};

export async function connectToRabbitMQ() {
  try {
    const conn = await amqp.connect(config);
    console.log("Conexión a RabbitMQ exitosa");
    return conn.createChannel();
  } catch (error) {
    console.error("Error al conectar con RabbitMQ:", error);
    throw error;
  }
}
