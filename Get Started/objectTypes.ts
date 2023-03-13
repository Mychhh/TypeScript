// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Object parameter ?
function printName(obj: { first: string; last?: string }) {
    if (obj.last) {
        console.log(`${obj.first} ${obj.last} `)
    } else {
        console.log(`${obj.first} `)
    }
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// --------------------------ALIAS----------------------------------- //
// This alias will be used as a parameter
type Point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoord1(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


export { }



