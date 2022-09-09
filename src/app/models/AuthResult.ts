import { User } from "./User";
import { TokenData } from "./TokenData";
import { Er } from "./Er";

export class AuthResult {
    user :User;
    tokenData :TokenData;
    error :Er;
    isSuccess :boolean;

    constructor( 
        user = new User, 
        tokenData = new TokenData, 
        error = new Er, 
        isSuccess = true
    ) {
        this.user = user;
        this.tokenData = tokenData;
        this.error = error;
        this.isSuccess = isSuccess;
    }
}