const worker = new Worker("name-worker.js")
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  const message = { command: "generate" };
  console.log("Message sent to worker: ", message);
  worker.postMessage(message);
});

worker.addEventListener("message", (message) => {
  output.textContent = message.data;
});
