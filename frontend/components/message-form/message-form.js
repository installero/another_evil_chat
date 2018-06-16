import { sendMessage } from "client/chat";
import "./message-form.css";
import "./static/send.png";

const form = document.querySelector(".js-message-form");
const input = form.querySelector(".js-message-form--input");
const submit = form.querySelector(".js-message-form--submit");

function submitForm() {
  sendMessage(input.value);
  input.value = "";
  input.focus();
}

input.addEventListener("keydown", event => {
  if (event.keyCode === 13 && event.ctrlKey) {
    event.preventDefault();
    submitForm();
  }
});

submit.addEventListener("click", event => {
  event.preventDefault();
  submitForm();
});
