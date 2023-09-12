import { Queue } from "bullmq";

const notificatonQueue = new Queue("email-queue");

async function init() {
  const res = await notificatonQueue.add("email to dipesh", {
    email: "dipeshsah98@gmail.com",
    subject: "Welcome message",
    body: "Hey Dipesh, Thanks for joining..",
  });

  console.log("Job added to email-queue", res.id);
}
init();
