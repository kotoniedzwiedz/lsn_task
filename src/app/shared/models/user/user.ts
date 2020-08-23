import { UserInterface } from './user-model';
import { UserRole } from 'src/app/shared/models/user/user-role';

export class User implements UserInterface {
    username: string;
    firstName: string;
    lastName: string;
    enabled: boolean;
    role: UserRole;

    constructor(user: UserInterface) {
        Object.assign(this, user);
    }

    update(user: UserInterface) {
        Object.assign(this, user);
    }
}
