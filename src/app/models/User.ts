import { Role } from "./Role";


export class User {

    id? :number;
    firstName :string;
    lastName :string;
    email :string;
    roles :Role[];

    constructor(
        id = 0,
        firstName = '',
        lastName = '',
        email = '',
        roles = new Array<Role>
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roles;
    }
}