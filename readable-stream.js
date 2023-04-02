const fs = require("fs");

const readable = fs.createReadStream("data.txt");

// Flowing mode:

// readable.on("data", (data) => {
//   console.log(data.toString());
//   readable.pause();
//   // Serve para pausar de 2 em 2 segundos o envio de dados:
//   setTimeout(() => readable.resume(), 2000);
// });

readable.on("readable", () => {
  console.log("readable");
  while(chunk = readable.read()) {
    console.log(chunk.toString());
  }
});

