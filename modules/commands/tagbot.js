module.exports.config = {
  name: "tagbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag bot hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100074149594741"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag tao có gì ko?","Sao?? Làm ơn đừng có mà tag tao, tao còn phải phục vụ box khác nữa","Sao gọi tôi có việc gì?","Hiện tôi đang bận phục vụ box khác","Hãy dùng lệnh ad hoặc adm để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm","Tag làm gì?","Sao? Tag có việc gì?","Gọi tôi có việc gì?","Thích tag ko :)","Tag gì lắm vậy? Bộ ko cho tao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Tôi đang bận ? Có chi ko?","Hiện tại tôi đang bận, có gì để lại tin nhắn qua người đó !!","Hãy dùng callad để liên hệ với admin >,<"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}