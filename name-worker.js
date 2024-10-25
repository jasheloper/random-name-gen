addEventListener("message", (message) => {
  console.log("Message received from main: ", message.data);
  if(message.data.command === "generate") {
    const generatedName = nameGen(firstNames);
     console.log("Output from worker:", generatedName);
     postMessage(generatedName);
  }
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