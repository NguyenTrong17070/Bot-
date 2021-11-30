const fs = require("fs");
module.exports.config = {
	name: "Bot cho t xin in4 đi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mod by Soldepzai", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Bot cho t xin in4 đi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot cho t xin in4 đi")==0 || (event.body.indexOf("Bot cho t xin in4 đi")==0)) {
		var msg = {
				body: "Hong bé ơin/Em không follow bot mà em đòi xin in tư của botn/Bot hong cho đâuuuuuuuuuuuu",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}