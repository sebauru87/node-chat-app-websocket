const socket = io();

socket.on("welcomeMessage", (message) => {
  console.log("welcomeMessage", message);
});

socket.on("newMessage", (message) => {
  console.log("newMessage", message);
});

document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target.elements.message.value);
  const message = e.target.elements.message.value;
  socket.emit("newMessage", message);
});
