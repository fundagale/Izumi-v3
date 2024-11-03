const { izumi,mode } = require('../lib/');
izumi(
  {
    pattern: "vv",
    fromMe: mode,
    desc: "Forwards The View once messsage",
    type: "downloader",
  },
		
  async (message, match) => {
  	if(!message.quoted) return;
    let buff = await message.quoted.download("buffer");
	  await message.forwardMessage(message.sender, message.quoted.data);
    return await;
  }
);
