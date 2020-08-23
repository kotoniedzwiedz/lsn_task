import { UserRole } from './user-role';

export interface UserInterface {
    username: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    enabled: boolean;
}
