import { UserRole } from '../models/user/user-role';
import { User } from '../models/user/user';
import { UserHelperService } from './user-helper.service';

describe('Service:: UserHelperService', () => {

    it('should return filled formgroup for edit user', () => {
        const user = new User({
            username: 'Reggie',
            firstName: 'Giles',
            lastName: 'Langham',
            role: UserRole.ADMIN,
            enabled: false
        });

        const form = UserHelperService.getUserAddEditForm(user);

        expect(form.value).toEqual({
            username: 'Reggie',
            firstName: 'Giles',
            lastName: 'Langham',
            role: UserRole.ADMIN,
            enabled: false
        });
    });

    it('should return empty formgroup for add user', () => {
        const form = UserHelperService.getUserAddEditForm();
        expect(form.value).toEqual({
            username: '',
            firstName: '',
            lastName: '',
            role: '',
            enabled: false
        });
    });
});
