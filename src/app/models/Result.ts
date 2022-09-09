import { Er } from "./Er";
import { Goal } from "./Goal";

export class Result {
    content: any[] = [];
    error :Er;
    isSuccessful :boolean;

    constructor(
        content = [], 
        error = new Er, 
        isSuccessful = true
    ) {
        this.content = content;
        this.error = error;
        this.isSuccessful =isSuccessful
    }
}