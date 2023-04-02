const fs = require("fs");
const zlib = require("zlib");

// const readable = fs.createReadStream("data.txt");
// const writable = fs.createWriteStream("data-2.zip");

// const zipper = zlib.createGzip();

// readable.pipe(zipper).pipe(writable);

const readable = fs.createReadStream("another-data.txt");
const writable = fs.createWriteStream("another-data-upper.txt");

const Transform = require("stream").Transform;
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    const chunkUpper = (chunk+"").toUpperCase();
    this.push(chunkUpper);
    callback();
  }
});

readable.pipe(upperCase).pipe(writable);
