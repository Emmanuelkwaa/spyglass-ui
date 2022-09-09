export class TokenData {
    jwtToken :string;
    refreshToken :string;

    constructor( jwtToken = '', refreshToken = '') {
        this.jwtToken = jwtToken;
        this.refreshToken = refreshToken;
    }
}