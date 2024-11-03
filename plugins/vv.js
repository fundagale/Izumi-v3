const { izumi,mode } = require('../lib/');
izumi(
  {
    pattern: "vv",
    fromMe: mode,
    desc: "Forwards The View once messsage",
    type: "downloader",
  },
  async (message, match) => {
		if (!message.reply_message)
			return await message.send('Reply to a message');
		await message.forwardMessage(message.sender, message.quoted.data);
  async (message, match) => {
  	if(!message.quoted) return;
    let buff = await message.quoted.download("buffer");
    return await message.sendFile(buff);
  }
);
