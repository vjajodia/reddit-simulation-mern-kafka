"use strict";
const { getMessageList } = require("./getMessageList");
const { sendMessage } = require("./sendMessage");

let handle_request = (msg, callback) => {
  switch (msg.route) {
    case "get_messagelist":
      getMessageList(msg, callback);
      break;
    case "send_message":
      sendMessage(msg, callback);
      break;
  }
};

exports.handle_request = handle_request;
