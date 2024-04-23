//Autodown Info Tik: 20/4/2024
/*
const axios = require("axios");
const moment = require("moment-timezone");

const linkapi = "https://www.tikwm.com/api/user/info";

module.exports = {
    config: {
        name: "info tiktok",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "tnt",
        description: "info tik",
        commandCategory: "Tiện ích",
        usages: "",
        cooldowns: 5
    },
    
    run: ({ api, event, args }) => {},    
    handleEvent: async ({ api, event }) => {
        const { body, senderID } = event;
        const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
        
        if (!body || (!body.includes('@') && !body.includes('@')) || senderID === api.getCurrentUserID() || senderID === '') return;

        try {
            const { user, stats } = (await axios.get(`${linkapi}?unique_id=${body}`)).data.data;
            const { id, uniqueId, nickname, avatarLarger, signature } = user;
            const { followingCount, followerCount, heartCount, videoCount } = stats;
            const stream = (await axios.get(avatarLarger, { responseType: "stream" })).data;

            api.sendMessage({
                body: `
🔗 Id: ${id}
📌 Tên tài khoản: ${nickname}
🎬 Tiktok id: ${uniqueId}
📝 Chú thích: ${signature}
👤 Đang theo dõi: ${followingCount}
😻 Follower: ${followerCount}
🎥 Video: ${videoCount}
❤ Lượt thích: ${heartCount}`,
                attachment: stream
            }, event.threadID, event.messageID);
        } catch (error) {
            console.error(error);
        }
    }
};
*/
//ae sử dụng chú ý nếu lỗi thì xóa đi