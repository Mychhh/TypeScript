// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Optional Object parameter ?
function printName(obj) {
    if (obj.last) {
        console.log("".concat(obj.first, " ").concat(obj.last, " "));
    }
    else {
        console.log("".concat(obj.first, " "));
    }
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
