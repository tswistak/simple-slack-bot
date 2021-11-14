const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_TOKEN,
  signingSecret: process.env.SLACK_SECRET,
});

app.command("/echo", async ({ command, ack, say }) => {
  try {
    await ack();
    const message = `<@${command.user_id}>: ${command.text}`;
    console.log(
      new Date(),
      command.user_name,
      command.command,
      command.text,
      message
    );
    say(message);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  const port = 3000;
  await app.start(process.env.PORT || port);
  console.log(`Bot jest uruchomiony na porcie ${port}!`);
})();
$;
