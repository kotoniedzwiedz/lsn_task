import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInterface } from '../models/user/user-model';

export class UserHelperService {
    static getUserAddEditForm(user?: UserInterface): FormGroup {
       return new FormGroup({
            username: new FormControl(user ? user.username : '', { validators: Validators.required }),
            firstName: new FormControl(user ? user.firstName : '', { validators: Validators.required }),
            lastName: new FormControl(user ? user.lastName : '', { validators: Validators.required }),
            role: new FormControl(user ? user.role : '', { validators: Validators.required }),
            enabled: new FormControl(user ? user.enabled : false, { validators: Validators.required }),
        });
    }
}
