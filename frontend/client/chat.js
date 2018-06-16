import createChannel from "client/cable";

let callback;

const chat = createChannel("ChatChannel", {
  received({ message }) {
    if (callback) callback.call(null, message);
  }
});

function sendMessage(message) {
  chat.perform("send_message", { message });
}

function setCallback(fn) {
  callback = fn;
}

export { sendMessage, setCallback };
