// this function can accept parameter number or string (number | string)
function printId(id: number | string) {
    console.log("Your ID is: " + id);
    // you may use typeof to modify the parameter
}
// OK
printId(101);
// OK
printId("202");
// Error

//printId({ myID: 22342 });
//Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

export { }