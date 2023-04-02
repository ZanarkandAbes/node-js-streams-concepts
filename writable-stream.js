const fs = require("fs");

// w = sobrescreve a = append

const writable = fs.createWriteStream("test.txt", { flags: "a", encoding: "utf-8" });

writable.write("linha 2 \n");
writable.end("Opa");