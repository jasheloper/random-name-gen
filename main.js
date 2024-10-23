const worker = new Worker("name-worker.js")
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  worker.postMessage({
    command: "generate",
  });
  console.log("Message sent to worker!");
});

worker.addEventListener("message", (message) => {
  output.textContent = message.data;
});
