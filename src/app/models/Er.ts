export class Er {
    code :number;
    type :string;
    message :string;

    constructor( code = 0, type = '', message = '') {
        this.code = code;
        this.type = type;
        this.message = message;
    }
}