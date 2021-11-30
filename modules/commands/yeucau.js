const fs = require("fs");
module.exports.config = {
name: "yêu em",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "Yêu em",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu em")==0 || (event.body.indexOf("Yêu em")==0)) {
		var msg = {
				body: "Tớ chỉ muốn nói, tớ yêu cậu <3",
				attachment: fs.createReadStream(__dirname + `/noprefix/yeucau.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }