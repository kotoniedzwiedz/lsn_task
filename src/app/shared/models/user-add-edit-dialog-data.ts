import { Form, FormGroup } from '@angular/forms';

export class UserAddEditDialogComponentData {
    title: string;
    form: FormGroup;

    constructor(dialogTitle: string, formGroup: FormGroup) {
        this.title = dialogTitle;
        this.form = formGroup;
    }
}
