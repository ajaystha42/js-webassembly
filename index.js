import fs from "fs";

const mathwasm = fs.readFileSync("./math.wasm");

const math = await WebAssembly.instantiate(new Uint8Array(mathwasm)).then(
  (res) => res.instance.exports
);

// can use like any other functions which we export.
// math.square(10);
console.log({ mathwasm, squareValue: math.square(10) });
