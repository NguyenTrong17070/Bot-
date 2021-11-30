const fs = require("fs");
module.exports.config = {
	name: "Yêu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu bot")==0 || (event.body.indexOf("Yêu bot")==0)) {
		var msg = {
				body: "Ừ :) , biết yêu tao là tốt, yêu tao mà nói tao ngu là mày chết con đĩ mẹ mày với tao =))))",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}