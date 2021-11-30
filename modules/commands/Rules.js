/** Hầu hết mấy ông dùng bypass module donate thì chả cần dùng cái này đâu vì tội gì mà không dùng mấy module xịn hơn đúng k =))**/
/** Đổi Credit ? Nếu bạn không có văn hóa như Hà Mạc Trường Giang ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thì là luật đó",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Điều khoản sử dụng bot trong box:
⚠ Vui lòng chấp hành nghiêm chỉnh để tránh bị hạn chế dùng lệnh ( user ban )
Các lệnh box bị cấm và chỉ QTV được dùng như sau
Checktt all 
Locmemdie 
Family
Các lệnh dùng tự do nhưng sẽ bị cấm sau 17h 
Dhbc, taixiu, baucua, cave , wor .........
Sẽ update`, event.threadID, event.messageID);