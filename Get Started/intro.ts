// Interface for abstract Representation(Fields) and Operation(methods)
interface User {
    name: string;
    id: number;
}

// Class (Object)
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

// Class (Object) extending the User Interface upon Instantiation
const user: User = new UserAccount("Murphy", 1);

console.log(user);

export { }