# Random First Name Generator
To practice building a dedicated worker.

(under construction)


## Notes

### Main file: `main.js`

- The worker is created here using the `Worker()` constructor where the path containing the script is passed.

```
const worker = new Worker("name-worker.js");
```

- A click event is set up on the button, which will handle sending a message to the worker.

    - The message sent will be an object containing:

    ```
    {command: "generate"}
    ```


<br>

### Dedicated worker file: `name-worker.js`

- This file (the worker) is where the program's functionality lives (generating a random name).

- The worker will listen for the message from the main script.

- Once the message is received, a conditional is set up which checks for `generate`.

```
addEventListener("message", (message) => {
  if(message.data.command === "generate") {
     postMessage(nameGen(firstNames));
  }
});
```

- If all checks out, the worker script will run and the result (the name) is sent back to the main file via a message.

`postMessage(nameGen(firstNames))`

<br>


### Finally

`main.js` will listen for the message sent from the worker and this event will handle outputting the result in the browser.

```
output.textContent = message.data;
```

Ultimately, the files are sending data back and forth using messages.

<br>

*"The files never get direct access to each other's variables."* <br>
*-MDN Web Docs*