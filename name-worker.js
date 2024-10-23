addEventListener("message", (message) => {
  if(message.data.command === "generate") {
     postMessage(nameGen(firstNames));
  }
  console.log("Worker understands the assignment!");
});

const firstNames = [
    "Harry",
    "Larry",
    "Gary",
    "Sherry",
    "Barry",
    "Mary",
    "Terry",
    "Kerry",
    "Jerry",
    "Perry",
  ];
  
  function nameGen(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }