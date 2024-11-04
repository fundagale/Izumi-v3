const { izumi, mode } = require('../lib/');
izumi(
  {
    pattern: "vv",
    fromMe: mode,
    desc: "Forwards the view-once message to your DM",
    type: "downloader",
  },
  async (message, match) => {
    try {
      let buff = await message.quoted.download("buffer");
await message.client.sendMessage(message.sender, {
        image: buff,
        viewOnce: false
      });
await message.client.sendMessage(message.sender, {
        video: buff,
        viewOnce: false
      });
    } catch (error) {
      console.error("Error forwarding view-once message:", error);
    }
  }
);
