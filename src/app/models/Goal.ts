import { Category } from "./Category";
import { User } from "./User";

export class Goal {

    id? :number;
    name :string;
    description :string;
    picture? :string;
    currentlySaved :string;
    targetDate :string;
    targetAmount :string;
    user :User;
    category :Category;

    constructor(
        id = 0,
        name = '',
        description = '',
        picture = '',
        currentlySaved = '',
        targetDate = '',
        targetAmount = '',
        user = new User,
        category = new Category
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.currentlySaved = currentlySaved;
        this.targetDate = targetDate;
        this.targetAmount = targetAmount;
        this.user = user;
        this.category = category;

    }
}