import { setCallback } from "client/chat";
import "components/message/message";
import "./messages.css";

const messages = document.querySelector(".js-messages");
const content = messages.querySelector(".js-messages--content");

function scrollToBottom() {
  content.scrollTop = content.scrollHeight;
}

scrollToBottom();

setCallback(message => {
  content.insertAdjacentHTML("beforeend", message);
  scrollToBottom();
});
