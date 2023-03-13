// string literal types
function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");

//   printText("G'day, mate", "centre");
//   Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

// -----------------------------numeric literal types------------------------- //
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
compare('a', 'b');

//---------using literal and non literal types as union--------//

interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");
//   configure("automatic");
//   Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

export { }